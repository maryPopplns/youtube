import { Link, Routes, Route } from 'react-router-dom';
import Video from '../video/Video';
import './videoTile.css';

export default function VideoTile(props) {
  function clickHandler() {
    props.setCurrentVideoHandler(props.video);
  }

  return (
    <>
      <Link
        onClick={clickHandler}
        to={`/youtube/${props.video.title}`}
        key={props.index}
      >
        <div className='videoTile'>
          <img
            className='videoTileThumbnail'
            src={props.video.thumbnailPath}
            alt={props.title}
          ></img>
          <div className='videoTileTitle'>{props.video.title}</div>
        </div>
      </Link>
    </>
  );
}
