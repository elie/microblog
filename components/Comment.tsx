'use client';

import { deleteComment } from "@/actions/actions";
import { useParams } from "next/navigation";

/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */

function Comment({ text, id }: { text: string, id: number; }) {
  const params = useParams();

  return (
    <div>
      <form
        action={async () => {
          await deleteComment(Number(params.postId), id);
        }}
      >
        <span className="display-6">{text} </span>&nbsp;
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash mr-2"></i>
        </button>
      </form>
    </div>
  );
}

export default Comment;
