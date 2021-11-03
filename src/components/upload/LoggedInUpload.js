import { useState } from 'react';
import './loggedInUpload.css';

export default function LoggedInUpload() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoTags, setVideoTags] = useState('');
  // TODO create logic to upload videos

  const videoTitleHandler = (event) => setVideoTitle(event.target.value);
  const videoDescriptionHandler = (event) =>
    setVideoDescription(event.target.value);
  const videoTagsHandler = (event) => setVideoTags(event.target.value);

  return (
    <main id='loggedInUploadContainer'>
      <h2 id='loggedInUploadHeading'>Upload Video</h2>
      <form id='uploadVideoForm'>
        <div className='inputContainer'>
          <label for='videoTitle'>Title: </label>
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
          <label for='videoDescription'>Description: </label>
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
          <label for='videoTags'>Tags: </label>
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
