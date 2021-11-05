import './videoTile.css';

export default function VideoTile(props) {
  return (
    <div className='videoTile'>
      <img
        className='videoTileThumbnail'
        src={props.video.thumbnailPath}
        alt={props.title}
      ></img>
    </div>
  );
}
