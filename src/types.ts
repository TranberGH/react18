interface ItemImage {
  url: string;
  width: number;
  height: number;
}

interface FeedItem {
  title: string;
  description: string;
  image: ItemImage;
  link: string;
}

interface RSSImage {
  '@url': string;
  '@width': number;
  '@height': number;
}

interface RSSItem {
  title: string;
  description: string;
  'media:content': RSSImage;
  link: string;
  pubDate: string;
}

export type { RSSItem, FeedItem, ItemImage };
