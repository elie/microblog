'use client';

import { useState } from "react";
import { saveComment } from "@/actions/actions";
import { useParams } from 'next/navigation';

/** Comment form
 *
 * Could be used for adding/editing: just shows form and tracks input.
 *
 */

function CommentForm() {
  const params = useParams();
  const [data, setData] = useState("");
  const save = saveComment.bind(null, Number(params.postId));

  return (
    <div className="my-4">
      <form onSubmit={ async (evt) => {
        evt.preventDefault();
        await save(data);
        setData("")
      }}>
        <div className="form-group">
          <input
            onChange={(evt) => setData(evt.target.value)}
            id="commentform-text"
            name="text"
            placeholder="New Comment"
            className="form-control"
            value={data}
          />
        </div>
        <button className="btn btn-primary">Add</button>

      </form>

    </div>
  );
}

export default CommentForm;












