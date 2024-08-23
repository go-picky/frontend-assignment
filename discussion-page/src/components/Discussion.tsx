import Comment from "./Comment";
import Image from "next/image";
import { User } from "@/types";

interface PropData {
  id: number;
  title: string;
  content: string;
  image_urls: Array<string>;
  upVoteCount: number;
  viewCount: number;
  commentCount: number;
  user: User;
  // replies: Array<any>;
  comments: Array<{
    id: number;
    content: string;
    image_urls: Array<string>;
    upVoteCount: number;
    viewCount: number;
    commentCount: number;
    user: User;
    replies: Array<any>;
  }>;
}

export default function Discussion({ data }: { data: PropData }) {
  return (
    <div className="bg-white w-full border-2 border-gray-300 md:max-w-4xl shadow-md rounded-lg p-6 mt-0 md:mt-2">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
      <div className="flex items-center mb-4 gap-3">
        <div className="relative w-16 h-16">
          <Image
            src={data.user.image_url}
            alt={data.user.nick_name}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{data.user.nick_name}</p>
          <p className="text-sm text-gray-500">{data.user.skin_type}</p>
        </div>
      </div>
      <p className="mb-5">{data.content}</p>
      <div className="flex cursor-pointer justify-start gap-1 items-center relative w-full mx-auto overflow-x-scroll">
        {data.image_urls.map((url, index) => (
          <Image
            key={index}
            src={url}
            width={300}
            height={300}
            alt={`Discussion image ${index + 1}`}
            className="flex-shrink-0"
          />
        ))}
      </div>
      <div className="flex gap-7 mt-2 text-sm text-gray-500 mb-4">
        <span className="flex gap-3">
          <Image
            src="/images/icon-upvote-14-px@3x.png"
            alt="up-votes-icon"
            width={20}
            height={20}
          />
          {data.upVoteCount}
        </span>
        <span className="flex gap-3">
          <Image
            src="/images/icon-comment-14-px@3x.png"
            alt="comment-icon"
            width={20}
            height={20}
          />
          {data.commentCount}
        </span>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-700">{data.comments.length} Comments</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {data.comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}
