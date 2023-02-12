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
     <div className="flex flex-col py-0 -mt-3  items-center">
      <div className="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-16 lg:pb-48">
        <p className="text-white md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to track n supply!</h1>
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
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
    <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-black text-white rounded-lg md:rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-white font-semibold mb-2">Traceability</h3>
          <p className="text-white mb-2">Trace your supplies from origin to destination in real-time tracking system with transparency.</p>
          <a href="#" className="text-[white] hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-black text-white rounded-lg md:rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div>
          <h3 className="text-lg md:text-xl text-white font-semibold mb-2">Security</h3>
          <p className="text-white mb-2">Ensure safe and secure transactions with blockchain technology.</p>
          <a href="#" className="text-[white] hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
        </div>
      </div>
      <div className="flex gap-4 md:gap-6">
        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-black text-white rounded-lg md:rounded-xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-white font-semibold mb-2">Decentralised</h3>
          <p className="text-white mb-2">Empower your supply chain with decentralised solutions so that there isn't a single point of failure. </p>
          <a href="#" className="text-[white] hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
        </div>
      </div>

      

      
      </div>
      </main>

    </>
  );
};

export default Home;
