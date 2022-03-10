import type { FeedItem, RSSItem } from '../types';

function createItem(feedItem: RSSItem): Partial<FeedItem> {
  const {
    title,
    description,
    link,
    ['media:content']: { ['@url']: url, ['@width']: width, ['@height']: height },
  } = feedItem;

  // const { ['@url']: url, ['@width']: width, ['@height']: height } = feedItem['media:content'];
  return {
    title,
    description,
    link,
    image: {
      url,
      width,
      height,
    },
  };
}

export { createItem };
