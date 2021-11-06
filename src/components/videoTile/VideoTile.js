import { Link, Routes, Route } from 'react-router-dom';
import Video from '../video/Video';
import './videoTile.css';

export default function VideoTile(props) {
  return (
    <>
      <Link to={`/youtube/${props.video.title}`} key={props.index}>
        <div className='videoTile'>
          <img
            className='videoTileThumbnail'
            src={props.video.thumbnailPath}
            alt={props.title}
          ></img>
        </div>
      </Link>
    </>
  );
}
