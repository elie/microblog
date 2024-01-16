import { deletePost, vote } from "@/actions/actions";
import { IPost } from "@/interfaces/interfaces";
// import "./PostDisplay.css";

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

interface PostDisplayProps {
  post: IPost;
  postId: number;
}

function PostDisplay({ post, postId }: PostDisplayProps) {
  const { title, description, body, votes } = post;
  const remove = deletePost.bind(null, postId);
  const doVote = vote.bind(null, postId);

  return (
    <div className="PostDisplay">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-body">
          <p className="fst-italic">{description}</p>
          <div className="border-top my-3"></div>
          <div>{body}</div>
        </div>


        <div className="d-flex justify-content-start">
          <div className="text-center">
            <div className="fw-bold mb-2">{votes} votes</div>
            <form >
              <div className="btn-group" role="group" aria-label="Vote buttons">
                <button className="btn btn-outline-primary" formAction={async () => {
                  "use server";
                  await doVote("up");
                }}>
                  <i className="bi bi-arrow-up"></i>
                </button>
                <button className="btn btn-outline-secondary" formAction={async () => {
                  "use server";
                  await doVote("down");
                }}>
                  <i className="bi bi-arrow-down"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <form className="mb-3 my-3" action={remove}>
        <button className="btn btn-danger bi bi-trash"> Delete Post </button>
      </form>
    </div>
  );
}

export default PostDisplay;