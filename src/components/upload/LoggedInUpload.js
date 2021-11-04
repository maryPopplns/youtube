import AddVideo from './AddVideo';
import AddThumbnail from './AddThumbnail';
import { useState } from 'react';
import './loggedInUpload.css';

export default function LoggedInUpload() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoTags, setVideoTags] = useState('');
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const videoTitleHandler = (event) => setVideoTitle(event.target.value);
  const videoDescriptionHandler = (event) =>
    setVideoDescription(event.target.value);
  const videoTagsHandler = (event) => setVideoTags(event.target.value);
  function setVideoHandler(input) {
    setVideo(input);
    console.log('video');
  }
  function setThumbnailHandler(input) {
    setThumbnail(input);
    console.log('thumbnail');
  }

  return (
    <main id='loggedInUploadContainer'>
      <h2 id='loggedInUploadHeading'>Upload Video</h2>
      <form id='uploadVideoForm'>
        <AddVideo video={video} setVideoHandler={setVideoHandler} />
        <AddThumbnail
          thumbnail={thumbnail}
          setThumbnailHandler={setThumbnailHandler}
        />
        <div className='inputContainer'>
          <label htmlFor='videoTitle'>Title: </label>
          <input
            className='uploadVideoInput'
            type='text'
            id='videoTitle'
            name='videoTitle'
            value={videoTitle}
            onChange={videoTitleHandler}
            required
          ></input>
        </div>
        <div className='inputContainer'>
          <label htmlFor='videoDescription'>Description: </label>
          <textarea
            className='uploadVideoInput'
            id='videoDescription'
            name='videoDescription'
            value={videoDescription}
            onChange={videoDescriptionHandler}
            required
          ></textarea>
        </div>
        <div className='inputContainer'>
          <label htmlFor='videoTags'>Tags: </label>
          <textarea
            className='uploadVideoInput'
            id='videoTags'
            name='videoTags'
            value={videoTags}
            onChange={videoTagsHandler}
          ></textarea>
        </div>
      </form>
    </main>
  );
}
