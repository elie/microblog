// import "./Post.css";
import Link from "next/link";
import CommentList from "@/components/CommentList";
import PostDisplay from "@/components/PostDisplay";
import CommentForm from "@/components/CommentForm";
import { getPostWithComments } from "@/queries/posts";

async function Post(data: { params: { postId: string; }; }) {

  const postId = Number(data.params.postId);

  const post = await getPostWithComments(postId);

  return (
    <div className="Post container my-5 ">

      <PostDisplay post={post} postId={Number(data.params.postId)} />

      <section className="Post-comments mb-4 my-4">
        <h4 className="display-5">Comments</h4>
        <CommentList comments={post.comments} />
        <CommentForm />
      </section>
      <Link href="/">Go home</Link>
    </div>
  );
}

export default Post;