"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  console.log(session?.user);

  return (
    <nav className="fixed z-50 bg-gray-200 text-black p-3 w-screen">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="text-4xl mr-2 font-bold text-customPink">
          picky
        </Link>
        <div className="hidden md:flex space-x-4 items-center w-869">
          <Link
            href="https://www.gopicky.com/products?category=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,500,501,502&skin=4&sensitive=0&attribute=0,1,2,3,4,5,6,7,8,9,10,11,12,13&concern=0,1,2,3,4,5,6,7"
            className="text-black hover:text-pink-500"
          >
            products
          </Link>
          <Link
            href="https://www.gopicky.com/curations"
            className="text-black hover:text-pink-500"
          >
            curation
          </Link>
          <Link href="/discussion" className="text-black hover:text-pink-500">
            discussion
          </Link>
          <Link
            href="https://creatorsapp.gopicky.com/sign-up"
            className="text-black hover:text-pink-500"
          >
            picky for creators
          </Link>
          <Link
            href="https://picky.notion.site/Picky-Plus-Creators-Program-Overview-Membership-Benefits-Rules-932af58f7d4841baba8c4eb6b564334c"
            target="_blank"
            className="text-customPink font-semibold text-[16px] hover:text-pink-700"
          >
            join picky plus
          </Link>
          <div className="relative ml-12">
            <input
              type="text"
              placeholder="Products, brands, discussions"
              className="placeholder-gray-500 w-[270px] py-2 pl-10 pr-4 outline-none border border-customGray bg-white text-sm p-2 rounded-full"
            />
            <Image
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              src="/images/search@3x.png"
              alt="magnifying glass"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div>
          {session ? (
            <div className="flex overflow-hidden rounded w-fit items-center space-x-4 bg-red-500 hover:bg-red-600">
              <button
                onClick={() => signOut()}
                className="text-white px-4 py-2 bg-customPink hover:bg-pink-700 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-customPink whitespace-nowrap hover:bg-pink-700 text-white px-4 py-2 rounded"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
