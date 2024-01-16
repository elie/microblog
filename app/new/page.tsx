'use client';

import { useState } from 'react';
import { savePost } from '@/actions/actions';
import { useRouter } from 'next/navigation';

/** Show post form.
 *
 */

function PostForm() {

  const router = useRouter();

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    body: "",
  });

  function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evt.target;
    setPostData(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <div className="mx-2 mb-5">

      <h2 className="display-5">Add a new post!</h2>
      <form className="" action={savePost}>

        <div className="mb-3">
          <label htmlFor="editform-title" className="form-label">Title:</label>
          <input type="text" onChange={handleChange}
            id="editform-title"
            name="title"
            className="form-control form-control-lg"
            value={postData.title} />
        </div>

        <div className="mb-3">
          <label htmlFor="editform-description" className="form-label">Description:</label>
          <input type="text" onChange={handleChange}
            id="editform-description"
            name="description"
            className="form-control"
            value={postData.description} />
        </div>

        <div className="mb-3">
          <label htmlFor="editform-body" className="form-label">Body:</label>
          <textarea onChange={handleChange}
            id="editform-body"
            name="body"
            className="form-control"
            rows={10}
            value={postData.body} />
        </div>

        <div className="d-flex">
          <button type="submit" className="btn btn-primary btn-lg mx-2">Save</button>
          <button type="button" onClick={() => router.push('/')} className="btn btn-secondary btn-lg">Cancel</button>
        </div>

      </form>
    </div>
  );
}

export default PostForm;