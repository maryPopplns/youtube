export default function AddThumbnail(props) {
  function addThumbnailHandler(event) {
    const FILE = event.target.files[0];
    props.setThumbnailHandler(FILE);
  }

  return (
    <div className='buttonContainer'>
      <label htmlFor='uploadThumbnailInput' className='buttonLabel'>
        click to add thumbnail
      </label>
      <input
        onChange={addThumbnailHandler}
        id='uploadThumbnailInput'
        type='file'
        accept='image/*'
      ></input>
    </div>
  );
}
