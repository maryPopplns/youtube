import './middleHeader.css';

export default function MiddleHeader() {
  return (
    <form id='inputSearchContainer' onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='Search' id='searchInput'></input>
      <button id='searchSubmitButton'>
        <i id='searchMagIcon' className='fas fa-search'></i>
      </button>
    </form>
  );
}
