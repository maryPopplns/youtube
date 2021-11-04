export default function AddVideo(props) {
  function addVideoHandler(event) {
    const FILE = event.target.files[0];
    props.setVideoHandler(FILE);
  }

  return (
    <div className='buttonContainer'>
      <label htmlFor='uploadVideoInput' className='buttonLabel'>
        click to add video
      </label>
      <input
        onChange={addVideoHandler}
        id='uploadVideoInput'
        type='file'
        accept='.mp4'
      ></input>
    </div>
  );
}
