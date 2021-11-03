import { useState } from 'react';
import './loggedInUpload.css';

export default function LoggedInUpload() {
  const [videoTitle, setVideoTitle] = useState('');
  // TODO create logic to upload videos
  function videoTitleHandler(event) {
    setVideoTitle(event.target.value);
  }

  return (
    <main id='loggedInUploadContainer'>
      <h2 id='loggedInUploadHeading'>Upload Video</h2>
      <form>
        <label for='videoTitle'>Title: </label>
        <input
          id='videoTitle'
          name='videoTitle'
          value={videoTitle}
          onChange={videoTitleHandler}
        ></input>
      </form>
    </main>
  );
}
