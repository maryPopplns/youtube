import AddVideo from './AddVideo';
import AddThumbnail from './AddThumbnail';
import './loggedInUpload.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

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
  }
  function setThumbnailHandler(input) {
    setThumbnail(input);
  }
  async function submitVideoHandler(event) {
    event.preventDefault();
    try {
      // upload video to storage and get url
      const VIDEO_PATH = `youtube/video/${uuidv4()}_${video.name}`;
      const VIDEO_REF = ref(getStorage(), VIDEO_PATH);
      await uploadBytes(VIDEO_REF, video);
      const VIDEO_URL = await getDownloadURL(VIDEO_REF);

      // upload thumbnail to storage and get url
      const THUMBNAIL_PATH = `youtube/thumbnail/${uuidv4()}_${thumbnail.name}`;
      const THUMBNAIL_REF = ref(getStorage(), THUMBNAIL_PATH);
      await uploadBytes(THUMBNAIL_REF, thumbnail);
      const THUMBNAIL_URL = await getDownloadURL(THUMBNAIL_REF);

      // upload video info to DB
      await addDoc(collection(getFirestore(), 'youtube'), {
        videoPath: VIDEO_URL,
        thumbnailPath: THUMBNAIL_URL,
        title: videoTitle,
        description: videoDescription,
        tags: videoTags,
        timestamp: serverTimestamp(),
        uploader: getAuth().currentUser.displayName,
      });

      await setVideoTitle('');
      await setVideoDescription('');
      await setVideoTags('');
      await setVideo(null);
      await setThumbnail(null);
    } catch (error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  return (
    <main id='loggedInUploadContainer'>
      <h2 id='loggedInUploadHeading'>Upload Video</h2>
      <form id='uploadVideoForm' onSubmit={submitVideoHandler}>
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
            // required
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
            // required
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
        <div id='uploadVideoSubmitButtonContainer'>
          <button id='uploadVideoSubmitButton'>submit</button>
        </div>
      </form>
    </main>
  );
}
