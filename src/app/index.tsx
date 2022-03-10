// import { hot } from "react-hot-loader/root";
import React from 'react';

import { useFeeds } from './app.hooks';

import '../assets/styles/styles.scss';
import { InfosItem } from '../components';

function App() {
  const { feedsChoices, handleFeedChoice, feedItems } = useFeeds();
  return (
    <main>
      <header>
        <h1>Flux RSS</h1>
      </header>
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
      <div>
        {feedItems.map((item, itemIndex) => {
          return <InfosItem item={item} even={itemIndex % 2 === 0} />;
        })}
      </div>
    </main>
  );
}

// export default hot(App);
export default App;
