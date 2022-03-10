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

  console.log('item : ', item, even);
  return (
    <article className={`feed-article${even ? ' even-item' : ''}`}>
      <header className="feed-header">
        <h2>
          <a href={link} target="_blank">
            {title}
          </a>
        </h2>
      </header>
      <div className="feed-content">
        {url && (
          <figure className="feed-image">
            <img src={url} width={width} height={height} alt="" />
          </figure>
        )}
        {description}
      </div>
    </article>
  );
}

export { InfosItem };
