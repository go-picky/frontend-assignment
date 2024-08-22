"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed z-50 bg-gray-200 text-black p-3 w-screen">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="text-4xl font-bold text-customPink">
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
            target="_blank"
            className="text-black hover:text-pink-500"
          >
            picky for creators
          </Link>
          <Link
            href="/join"
            className="text-pink-500 hover:text-pink-700"
            style={{
              color: "#F06384",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            join picky plus
          </Link>
          <div className="relative ml-12">
            <input
              type="text"
              style={{
                width: "270px",
                backgroundColor: "white",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "2.5rem",
                paddingRight: "1rem",
                outline: "none",
                borderColor: "rgba(107, 114, 128, 1)",
                borderWidth: "1px",
              }}
              placeholder="Products, brands, discussions"
              className="placeholder-gray-500 text-sm p-2 rounded-full"
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
            <div className="flex w-fit items-center space-x-4 bg-red-500  hover:bg-red-600">
              <button
                onClick={() => signOut()}
                style={{ backgroundColor: "#F06384", width: "fit-content" }}
                className="text-white px-4 py-2 rounded "
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              style={{ backgroundColor: "#F06384", width: "fit-content" }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
