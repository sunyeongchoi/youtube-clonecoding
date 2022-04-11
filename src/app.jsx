import React from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    console.log('useEffect');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDzrpquuvaAoX1L20W0TxStPtUOm4TGMgU&part=snippet&maxResults=25", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
