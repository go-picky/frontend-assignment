import Reply from "./Reply";
import { User } from "@/types";

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
      <div className="flex items-center mb-2">
        <img
          src={data.user.image_url}
          alt={data.user.nick_name}
          width={32}
          height={32}
          className="rounded-full mr-2"
        />
        <div>
          <p className="font-semibold">{data.user.nick_name}</p>
          <p className="text-xs text-gray-500">{data.user.skin_type}</p>
        </div>
      </div>
      <p className="mb-2">{data.content}</p>
      {data.image_urls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Comment image ${index + 1}`}
          width={150}
          height={150}
          className="mb-2"
        />
      ))}
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>{data.upVoteCount} up votes</span>
        <span>{data.commentCount} replies</span>
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
