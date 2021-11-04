export default function AddThumbnail(props) {
  const { thumbnail, setThumbnailHandler } = props;
  function addThumbnailHandler(event) {
    const FILE = event.target.files[0];
    setThumbnailHandler(FILE);
  }

  return (
    <div className='buttonContainer'>
      <label htmlFor='uploadThumbnailInput' className='buttonLabel'>
        {thumbnail ? 'successful' : 'click to add thumbnail'}
      </label>
      <input
        onChange={addThumbnailHandler}
        id='uploadThumbnailInput'
        type='file'
        accept='image/*'
        required
      ></input>
    </div>
  );
}
