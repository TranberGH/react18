import React from 'react';
import type { FeedItem } from '../../types';

import './infos-item.scss';

interface InfosItemProps {
  item: FeedItem;
  even: boolean;
}

function InfosItem({ item, even }: InfosItemProps) {
  const {
    title,
    description,
    link,
    image: { url, width, height },
  } = item ?? {};

  return (
    <article className={`feed-article${even ? ' even-item' : ''}`}>
      <header className="feed-article-header">
        <h2>
          <a href={link} target="_blank">
            {title}
          </a>
        </h2>
      </header>
      <div className="feed-article-content">
        {url && (
          <figure className="feed-article-image">
            <img src={url} width={width} height={height} alt="" />
          </figure>
        )}
        {description}
      </div>
    </article>
  );
}

export { InfosItem };
