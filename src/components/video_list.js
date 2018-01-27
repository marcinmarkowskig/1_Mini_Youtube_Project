import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {//5 razy wyświetli się słowo "Video", liczba 5 jest ukryta w referencji props.video z index.js
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />)//kluczowe - odniesienie dla video_list_item konkretnego pliku video z listy pobranej  index.js; też zastosowanie referencji - tutaj rodzic, a potomek w video_list_item.js, dlatego props w nawiasie w video_list_item.js
  })

//wyświetlenie listy 5 filmów
  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
