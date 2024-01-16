import { sql } from "@vercel/postgres";
import { IPost } from "@/interfaces/interfaces";

export async function getPosts() {
  const result = await sql
    `SELECT p.id,
              p.title,
              p.description,
              p.votes
       FROM posts p
       ORDER BY p.id
      `;
  return result.rows as IPost[];
};

export async function getPostWithComments(id: number) {
  const result = await sql
    `SELECT p.id,
              p.title,
              p.description,
              p.body,
              p.votes,
              CASE
                  WHEN COUNT(c.id) = 0 THEN json '[]'
                  ELSE JSON_AGG(
                          JSON_BUILD_OBJECT('id', c.id, 'text', c.text)
                      ) END AS comments
       FROM posts p
                LEFT JOIN comments c ON c.post_id = p.id
       WHERE p.id = ${id}

       GROUP BY p.id
       ORDER BY p.id
      `;
  return result.rows[0] as IPost;
}


export async function voteOnPost(id: number, direction: string) {
  let delta = direction === "up" ? +1 : -1;
  const result = await sql
    `UPDATE posts SET votes=votes + ${delta} WHERE id = ${id} RETURNING votes;`;
  return result.rows[0] as IPost;
};



export async function createPost(post: Omit<IPost, 'id' | 'comments' | 'votes'>) {
  const { title, body, description } = post;
  const result = await sql
    `INSERT INTO posts (title, description, body)
       VALUES (${title}, ${body}, ${description})
       RETURNING id, title, description, body, votes;`;
  return result.rows[0] as IPost;
};

export async function updatePost(post: IPost, id: number) {
  const { title, body, description } = post;
  const result = await sql
    `UPDATE posts
       SET title=${title},
           description=${description},
           body=${body}
       WHERE id = ${id}
       RETURNING id, title, description, body, votes`;
  return result.rows[0] as IPost;
}

export async function removePost(id: number) {
  await sql`DELETE FROM posts WHERE id = ${id};`;
  return { message: "deleted" };
};


