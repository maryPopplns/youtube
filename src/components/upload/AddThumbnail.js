export default function AddThumbnail(props) {
  const { thumbnail, setThumbnailHandler } = props;
  function addThumbnailHandler(event) {
    const FILE = event.target.files[0];
    setThumbnailHandler(FILE);
  }

  return (
    <div className='buttonContainer'>
      <label
        htmlFor='uploadThumbnailInput'
        className='buttonLabel'
        type='button'
      >
        {thumbnail ? 'successful' : 'click to add thumbnail'}
      </label>
      <input
        name='uploadThumbnailInput'
        onChange={addThumbnailHandler}
        id='uploadThumbnailInput'
        type='file'
        accept='image/*'
        // required
      ></input>
    </div>
  );
}
