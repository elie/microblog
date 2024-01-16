"use server";

import { createComment, removeComment } from "@/queries/postComments";
import { createPost, voteOnPost, removePost } from "@/queries/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function savePost(formData: FormData) {

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const body = formData.get("body") as string;


  await createPost({
    title,
    description,
    body
  });

  revalidatePath("/");
  redirect("/");
}

export async function saveComment(postId: number, text: string) {


  await createComment(
    text,
    postId
  );


  revalidatePath(`/${postId}`);

}

export async function deletePost(postId: number) {

  await removePost(postId);

  revalidatePath(`/`);
  redirect(`/`);
}

export async function deleteComment(postId: number, commentId: number) {

  await removeComment(commentId);

  revalidatePath('/[postId]', 'page');
  redirect(`/${postId}`);
}

export async function vote(id: number, direction: "up" | "down") {

  await voteOnPost(id, direction);

  revalidatePath('/[postId]', 'page');
  revalidatePath('/', 'page');
}