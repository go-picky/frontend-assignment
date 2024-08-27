import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Discussion App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join the conversation and share your thoughts!
        </p>
        {session ? (
          <Link
            href="/discussion"
            className="bg-customPink hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Go to Discussions
          </Link>
        ) : (
          <Link
            href="/signin"
            className="bg-customPink hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Sign In to Start
          </Link>
        )}
      </div>
    </div>
  );
}
