import { useCallback, useEffect, useState } from 'react';
import Parser from 'rss-parser';

import { feeds } from '../config';

function useFeeds() {
  const [feedsChoices, setFeedsChoices] = useState<{ title: string; url: string }[]>([]);

  // const feedsList = feeds.map((feed) => {
  //   const feedRequest = new Request(feed.url, {
  //     headers: {
  //       'Access-Control-Allow-Origin': new URL(window.location.href).origin,
  //     },
  //     mode: 'no-cors',
  //   });
  //   return fetch(feedRequest);
  // });

  // Promise.all(feedsList).then((result) => {
  //   console.log('feeds : ', result, feeds);
  // });

  const handleFeedChoice = useCallback(async (evt) => {
    const select = evt.target as HTMLSelectElement;
    const feedUrl = select.options[select.selectedIndex].value;
    if (feedUrl) {
      const feedRequest = new Request(feedUrl, {
        // headers: {
        //   'Access-Control-Allow-Origin': new URL(window.location.href).origin,
        // },
        mode: 'cors',
      });
      fetch(feedRequest)
        .then((resp) => {
          console.log('resp : ', resp);
          return resp.text();
        })
        .then((result) => {
          console.log('result : ', result);
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

  return { feedsChoices, handleFeedChoice };
}

export { useFeeds };
