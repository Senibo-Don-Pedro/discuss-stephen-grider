import type { Comment } from "@prisma/client";
import { db } from "..";

export type CommentWihAuthor = (
  Comment & {user: {
    name: string | null
    image: string | null
  }}
)

export function fetchCommentsByPostId(postId: string): Promise<CommentWihAuthor[]> {
  return db.comment.findMany({
    where: {postId: postId},
    include: {
      user: {
        select: {
          name: true,
          image: true
        }
      }
    }
  })
}