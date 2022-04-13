import React from 'react';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDzrpquuvaAoX1L20W0TxStPtUOm4TGMgU&part=snippet&maxResults=25", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyDzrpquuvaAoX1L20W0TxStPtUOm4TGMgU&q=${query}&type=video`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId })))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
