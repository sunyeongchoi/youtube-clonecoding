import * as React from 'react';
import axios from 'axios';

const PLAYLIST_URL = 'https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDzrpquuvaAoX1L20W0TxStPtUOm4TGMgU&part=snippet&maxResults=25';
const VideoContents = () => {
  const [data, setData] = React.useState(null);
  const getData = async() => {
    const response = await axios.get(PLAYLIST_URL);
    setData(response.data.items);
  }

  React.useEffect(() => {
      getData();
  }, []);

  const test = React.useMemo(() => 
    data?.map((item, index) =>
      (
        <div className='item' key={item.id}>
          <iframe title={index} id="ytplayer" type="text/html" width="400" height="225"
            src={`https://www.youtube.com/embed/${item.id}?autoplay=1"`}
            frameBorder="0" allowFullScreen />
          <div id='details'>
            <h3>
              <a id='video-title-link' href={`https://www.youtube.com/embed/${item.id}?autoplay=1"`}>
                {item.snippet.title}
              </a>
            </h3>
          </div>
        </div>
      )
    ), [data]);

      return (
        <div id='content'>
          {data ? test : null}
        </div>
      )
};

export default VideoContents;