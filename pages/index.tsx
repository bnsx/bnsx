import FaceBook_Link from "@/components/SocialLinks/Facebook";
import Github_Link from "@/components/SocialLinks/Github";
import Head from "next/head";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-white drop-shadow-xl rounded-xl w-72 h-[500px] overflow-hidden p-10">
          <div className="mt-5">
            <Image
              className="transform hover:scale-150 duration-300 w-40 h-40 rounded-full mx-auto cursor-pointer"
              src={"/profile.jpg"}
              width={2000}
              height={2000}
              alt={"Profile"}
            ></Image>
          </div>
          <div className="text-center">
            <h1 className="text-4xl">Ammarin</h1>
            <h2 className="text-2xl">Boonsong</h2>
          </div>
          <div className="text-center">
            <p className="text-gray-500">My hobbies</p>
            <p className="text-lg">Create application and read a book.</p>
          </div>
          <div className="flex justify-center">
            <FaceBook_Link url="https://facebook.com/blackbird.no" />
            <Github_Link url="https://github.com/bnsx" />
          </div>
        </div>
      </div>
    </>
  );
}
