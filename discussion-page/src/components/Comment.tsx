import Reply from "./Reply";
import { User } from "@/types";
import Image from "next/image";

interface PropData {
  id: number;
  content: string;
  image_urls: Array<string>;
  upVoteCount: number;
  viewCount: number;
  commentCount: number;
  user: User;
  replies: Array<any>;
}

export default function Comment({ data }: { data: PropData }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2 gap-3">
        <div className="relative w-14 h-14">
          <Image
            src={data.user.image_url}
            alt={data.user.nick_name}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{data.user.nick_name}</p>
          <p className="text-xs text-gray-500">{data.user.skin_type}</p>
        </div>
      </div>
      <p className="mb-2">{data.content}</p>
      {data.image_urls.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt={`Comment image ${index + 1}`}
          width={150}
          height={150}
          className="mb-2 cursor-pointer"
        />
      ))}
      <div className="flex gap-5 text-xs text-gray-500 mt-2  mb-2">
        <span className="flex gap-1">
          <Image
            src="/images/icon-upvote-14-px@3x.png"
            alt="up-votes-icon"
            width={12}
            height={12}
          />
          {data.upVoteCount}
        </span>
        <span className="flex gap-1">
          <Image
            src="/images/icon-comment-14-px@3x.png"
            alt="comment-icon"
            width={15}
            height={12}
          />
          {data.commentCount}
        </span>
      </div>
      {data.replies && data.replies.length > 0 && (
        <div className="mt-4 pl-4 border-l-2 border-gray-200">
          {data.replies.map((reply) => (
            <Reply key={reply.id} data={reply} />
          ))}
        </div>
      )}
    </div>
  );
}
