import React from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(undefined);

  React.useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, [youtube]);

  const selectVideo = React.useCallback((video) => {
    setSelectedVideo(video);
  }, [])
  
  const search = React.useCallback((query) => {
    // setSelectedVideo(null);
    youtube.search(query).then((videos) => {
      setVideos(videos);
      setSelectedVideo(null);
    })
  }, [youtube])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
