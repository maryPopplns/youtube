import { useState } from 'react';
import './loggedInUpload.css';

export default function LoggedInUpload() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  // TODO create logic to upload videos

  const videoTitleHandler = (event) => setVideoTitle(event.target.value);
  const videoDescriptionHandler = (event) =>
    setVideoDescription(event.target.value);

  return (
    <main id='loggedInUploadContainer'>
      <h2 id='loggedInUploadHeading'>Upload Video</h2>
      <form id='uploadVideoForm'>
        <div className='inputContainer'>
          <label for='videoTitle'>Title: </label>
          <input
            type='text'
            id='videoTitle'
            name='videoTitle'
            value={videoTitle}
            onChange={videoTitleHandler}
          ></input>
        </div>
        <div className='inputContainer'>
          <label for='videoDescription'>Description: </label>
          <textarea
            cols='15'
            id='videoDescription'
            name='videoDescription'
            value={videoDescription}
            onChange={videoDescriptionHandler}
          ></textarea>
        </div>
      </form>
    </main>
  );
}
