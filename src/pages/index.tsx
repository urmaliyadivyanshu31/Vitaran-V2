import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { GiDigitalTrace } from "react-icons/gi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

interface FeatureCardProps {
  title: string;
  desc: string;
}

const FeatureCard = ({ title, desc,  }: FeatureCardProps) => {
  return (
    <div className="relative backdrop-blur-sm bg-white/40 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-30 p-5 rounded-lg">
      <dt className="flex flex-col items-center md:items-start">
        <p className="pt-5 text-lg leading-6 font-medium font-semibold text-[#732fff] dark:text-[#e99aff]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-600 text-center md:text-left dark:text-white">
        {desc}
      </dd>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
     <main className="px-4 md:px-0 mx-auto max-w-[1080px] bg-black">
     <div className="flex flex-col items-center">
      <div className="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48">
        <p className="text-white md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to build the web</h1>
              <div>
                <Link
                  href="/explore"
                  className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-full text-black bg-gradient-to-r from-white to-gray-300 hover:drop-shadow-[0_3px_5px_#7d7d7d] dark:hover:drop-shadow-[0_3px_5px_#8ce1ff] md:py-2 md:text-lg md:px-8"
                >
                  Explore
                </Link>
              </div>
      </div>
    </div>
      </main>

    </>
  );
};

export default Home;
