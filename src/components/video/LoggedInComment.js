import './loggedInComment.css';

export default function LoggedInComment() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form id='commentForm' onSubmit={submitHandler}>
      <textarea id='newComment'></textarea>
      <button id='submitCommentButton'></button>
    </form>
  );
}
