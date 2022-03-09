// import { hot } from "react-hot-loader/root";
import * as React from 'react';

import { useFeeds } from './app.hooks';

import '../assets/styles/styles.scss';

function App() {
  const { feedsChoices, handleFeedChoice } = useFeeds();
  return (
    <>
      <h1>Hello</h1>
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
    </>
  );
}

// export default hot(App);
export default App;
