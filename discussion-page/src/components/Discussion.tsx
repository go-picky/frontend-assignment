"use client";

import { useState } from "react";
import Comment from "./Comment";
import { User } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.image_urls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.image_urls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-2">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
      <div className="flex items-center mb-4">
        <img
          src={data.user.image_url}
          alt={data.user.nick_name}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{data.user.nick_name}</p>
          <p className="text-sm text-gray-500">{data.user.skin_type}</p>
        </div>
      </div>
      <p className="mb-4">{data.content}</p>
      <div className={`w-80 relative w-full max-w-2xl mx-auto overflow-hidden`}>
        <div
          className={`flex gap-12 transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 106}%)` }}
        >
          {data.image_urls.map((url, index) => (
            <img
              key={index}
              src={url}
              width={300}
              height={300}
              alt={`Discussion image ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>{data.viewCount} views</span>
        <span>{data.upVoteCount} up Votes</span>
        <span>{data.commentCount} comments</span>
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
