import './video.css';
import ReactPlayer from 'react-player/lazy';

export default function Video(props) {
  return (
    <div id='videoPlayer'>
      <div id='videoContainer'>
        <video
          width='640'
          height='480'
          src={props.currentVideo.videoPath}
          controls
        />
      </div>
    </div>
  );
}
