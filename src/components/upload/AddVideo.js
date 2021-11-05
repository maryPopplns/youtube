export default function AddVideo(props) {
  const { video, setVideoHandler } = props;
  function addVideoHandler(event) {
    const FILE = event.target.files[0];
    setVideoHandler(FILE);
  }

  return (
    <div className='buttonContainer'>
      <label htmlFor='uploadVideoInput' className='buttonLabel' type='button'>
        {video ? 'successful' : 'click to add video'}
      </label>
      <input
        name='uploadVideoInput'
        onChange={addVideoHandler}
        id='uploadVideoInput'
        type='file'
        accept='.mp4'
        // required
      ></input>
    </div>
  );
}
