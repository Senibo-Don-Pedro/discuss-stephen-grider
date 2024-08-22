import type { Comment } from "@prisma/client";
import { db } from "..";
import { cache } from "react";

export type CommentWihAuthor = Comment & {
  user: {
    name: string | null;
    image: string | null;
  };
};

export const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWihAuthor[]> => {
    console.log("Making something");
    return db.comment.findMany({
      where: { postId: postId },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
  }
);
