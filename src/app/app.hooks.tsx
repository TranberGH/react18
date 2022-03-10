import { useCallback, useEffect, useState } from 'react';

import { feeds } from '../config';
import type { RSSItem, FeedItem } from '../types';
import { createItem } from '../utils';

function useFeeds() {
  const [feedsChoices, setFeedsChoices] = useState<{ title: string; url: string }[]>([]);
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  const handleFeedChoice = useCallback(async (evt) => {
    const select = evt.target as HTMLSelectElement;
    const feedUrl = select.options[select.selectedIndex].value;
    if (feedUrl) {
      fetch(`http://localhost:5000/?feed=${encodeURI(feedUrl)}`)
        .then((resp) => {
          return resp.json();
        })
        .then((result) => {
          const allFeedItems = result?.rss?.channel?.item?.map((currentItem: any) => {
            return createItem(currentItem);
          });
          setFeedItems(allFeedItems);
        });
    }
    //
  }, []);

  useEffect(() => {
    const feedsItems = feeds.map((feed) => {
      return feed;
    });

    setFeedsChoices(feedsItems);
  }, []);

  return { feedsChoices, handleFeedChoice, feedItems };
}

export { useFeeds };
