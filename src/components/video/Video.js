import LoggedInComment from './LoggedInComment';
import LoggedOutComment from './LoggedOutComment';
import './video.css';

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
      {/* TODO if the user is signed in allow to make comments */}
      {props.loggedIn ? (
        <LoggedInComment currentVideo={props.currentVideo} />
      ) : (
        <LoggedOutComment />
      )}
      <div id='commentContainer'></div>
    </div>
  );
}
