"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed z-50 bg-gray-800 text-white p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Discussion App
        </Link>
        <div>
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">{session.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
