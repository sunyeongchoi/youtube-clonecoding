import React from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, [youtube]);

  const search = query => {
    youtube.search(query).then(setVideos)
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
