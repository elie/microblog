import { sql } from "@vercel/postgres";

export async function getPostComments(postId: number) {
  const result = await sql
    `SELECT id, text FROM comments WHERE post_id = ${postId} ORDER BY id;`;
  return result.rows;
}


export async function createComment(text: string, postId: number) {
  const result = await sql
    `INSERT INTO comments (text, post_id)
       VALUES (${text}, ${postId})
       RETURNING id, text`;
  return result.rows[0];
}


export async function updateComment(text: string, postId: number) {
  const result = await sql
    `UPDATE comments SET text=${text} WHERE id = ${postId} RETURNING id, text;`;
  return result.rows[0];
}



export async function removeComment(id: number) {
  await sql`DELETE FROM comments WHERE id=${id};`;
  return { message: "deleted" };
}



