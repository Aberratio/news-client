import { SanityCommentItem } from "app/api/comments/route";
import { sanityClient } from "core/api/sanityClient";
import { NextResponse } from "next/server";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";

export const POST = async (request: Request) => {
  try {
    const allowedOrigin = request.headers.get("origin");
    const { _id } = await request.json();
    const responseComments: SanityCommentItem[] = await sanityClient.fetch(
      `*[_type == "comment" && post._ref == "${_id}"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc)`
    );

    const mappedComments = mapData(responseComments);
    return Response.json(
      { comments: mappedComments },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin || "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
          "Access-Control-Max-Age": "86400",
        },
      }
    );
  } catch (error) {
    console.error("Error adding reaction on article:", error);
    return Response.json(
      { error: "An error occurred adding reaction on article" },
      { status: 500 }
    );
  }
};

const cutComment = (comment: string) => {
  return comment.length > 100 ? comment.substring(0, 100) + "..." : comment;
};

const mapData = (data: SanityCommentItem[]): CommentSummarizationItem[] => {
  return data
    .map((item: SanityCommentItem) => {
      if (!item.text) return;
      return {
        articleSlug: item.post.slug.current,
        articleTitle: item.post.title,
        author: item.author,
        date: new Date(item._createdAt).toLocaleString(),
        dislikes: item.likes,
        id: item._id,
        likes: item.likes,
        text: cutComment(item.text),
      } as CommentSummarizationItem;
    })
    .filter((x) => x) as CommentSummarizationItem[];
};

export const OPTIONS = (request: Request) => {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
};
