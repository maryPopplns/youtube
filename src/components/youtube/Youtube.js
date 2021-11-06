import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import VideoTile from '../videoTile/VideoTile';
import './youtube.css';

export default function Youtube(props) {
  // TODO pull all videos from database, get each thumbnail, and use it to create a route to the video
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async function thumbnails() {
      let videos = [];
      const QUERY = query(collection(getFirestore(), 'youtube'));
      const SNAPSHOT = await getDocs(QUERY);
      await SNAPSHOT.forEach((doc) => {
        videos.push(doc.data());
      });
      await setVideos(videos);
    })();
  }, []);

  const VIDEO_TILES = videos.map((video, index) => {
    return (
      <VideoTile
        key={index}
        video={video}
        index={index}
        setCurrentVideoHandler={props.setCurrentVideoHandler}
      />
    );
  });

  return <div id='homeContainer'>{VIDEO_TILES}</div>;
}
