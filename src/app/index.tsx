// import { hot } from "react-hot-loader/root";
import React from 'react';

import { useFeeds } from './app.hooks';
import { InfosItem } from '../components';

import '../assets/styles/styles.scss';

function App() {
  const { feedsChoices, handleFeedChoice, feedTitle, feedDescription, feedItems } = useFeeds();
  return (
    <main>
      <header className="app-header">
        <h1>Flux RSS</h1>
        <form>
          <select onChange={handleFeedChoice}>
            <option>Sélectionner un flux RSS</option>
            {feedsChoices.map((feed, feedIndex) => {
              return (
                <option value={feed.url} key={`feeds-${feedIndex}`}>
                  {feed.title}
                </option>
              );
            })}
          </select>
        </form>
      </header>

      <div className="feed-block">
        {feedTitle && <h2 className="feed-title">{feedTitle}</h2>}
        {feedDescription && <p className="feed-description">{feedDescription}</p>}
        {feedItems.map((item, itemIndex) => {
          return (
            <>
              <InfosItem item={item} even={itemIndex % 2 === 0} />
              {itemIndex < feedItems.length - 1 && <hr className="feed-item-separator" />}
            </>
          );
        })}
      </div>
    </main>
  );
}

// export default hot(App);
export default App;
