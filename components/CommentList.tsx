import { IComment } from "@/interfaces/interfaces";
import Comment from "@/components/Comment";

/** CommentList: shows list of comments passed down as props.
 *
 */

interface CommentListProps {
  comments: IComment[];
}


function CommentList({ comments }: CommentListProps) {
  return (
    comments.map(c => (
      <Comment
        key={c.id}
        id={c.id}
        text={c.text}
      />
    )));
}

export default CommentList;
