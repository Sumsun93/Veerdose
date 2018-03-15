/**
 * Npm import
 */
import React from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
// import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
class Videos extends React.Component {
  state = {
    videos: [],
  }
  componentWillMount() {
    axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails', {
      params: {
        maxResults: 6,
        playlistId: 'UU_23cGTZrzuilpX42sHZcnQ',
        key: 'AIzaSyDzl7I4CYAHvCPER2OpzSCJ7qpWKWcuLT0',
      },
    })
      .then((resp) => {
        this.setState({
          videos: resp.data.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { videos } = this.state;
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: { // https://developers.google.com/youtube/player_parameters
    //     autoplay: 0,
    //   },
    // };
    if (videos.length === 0) {
      return <h1>Chargement</h1>;
    }
    console.log(videos);
    return (
      <div id="ytcontent">
        <h1>Mes dernières videos</h1>
        <div id="videos">
          {videos.map(video => (<Youtube
            className="ytvideos"
            videoId={video.contentDetails.videoId}
            // opts={opts}
          />))}
        </div>
      </div>
    );
  }
}
/**
 * Export
 */
export default Videos;
