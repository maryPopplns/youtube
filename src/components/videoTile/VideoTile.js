import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './videoTile.css';

export default function VideoTile(props) {
  return (
    <>
      <Link to={`/${props.video.title}`} key={props.index}>
        <div className='videoTile'>
          <img
            className='videoTileThumbnail'
            src={props.video.thumbnailPath}
            alt={props.title}
          ></img>
        </div>
      </Link>
      {/* <Routes>
      <Route path={`/${props.video.title}`} element={<Video />}
    </Routes> */}
    </>
  );
}
