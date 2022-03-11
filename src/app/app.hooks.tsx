import { useCallback, useEffect, useState } from 'react';

import { feeds } from '../config';
import type { RSSItem, FeedItem } from '../types';
import { createItem } from '../utils';

function useFeeds() {
  const [feedsChoices, setFeedsChoices] = useState<{ title: string; url: string }[]>([]);
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [feedTitle, setFeedTitle] = useState(null);
  const [feedDescription, setFeedDescription] = useState(null);

  const handleFeedChoice = useCallback(async (evt) => {
    const select = evt.target as HTMLSelectElement;
    const feedUrl = select.options[select.selectedIndex].value;
    if (feedUrl) {
      fetch(`http://localhost:5000/?feed=${encodeURI(feedUrl)}`)
        .then((resp) => {
          return resp.json();
        })
        .then((result) => {
          console.log('result : ', result?.rss?.channel);
          const { title, description, item } = result?.rss?.channel ?? {};
          const allFeedItems = item?.map((currentItem: any) => {
            return createItem(currentItem);
          });
          setFeedTitle(title);
          setFeedDescription(description);
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

  return { feedsChoices, handleFeedChoice, feedTitle, feedDescription, feedItems };
}

export { useFeeds };
