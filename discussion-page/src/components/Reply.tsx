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
  replies: Array<any>;
}

export default function Reply({ data }: { data: PropData }) {
  return (
    <div className="bg-white rounded-lg p-3 mb-2">
      <div className="flex items-center mb-2">
        <img
          src={data.user.image_url}
          alt={data.user.nick_name}
          width={24}
          height={24}
          className="rounded-full mr-2"
        />
        <div>
          <p className="font-semibold text-sm">{data.user.nick_name}</p>
          <p className="text-xs text-gray-500">{data.user.skin_type}</p>
        </div>
      </div>
      <p className="text-sm mb-2">{data.content}</p>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{data.upVoteCount} upVotes</span>
      </div>
    </div>
  );
}
