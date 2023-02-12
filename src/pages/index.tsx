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
  icon: any;
}

const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className="relative backdrop-blur-sm bg-white/40 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-30 p-5 rounded-lg">
      <dt className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#732fff] dark:bg-[#a13bf7] text-white">
          {icon}
        </div>
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
      {/* <Head>
        <title>Provenance</title>
        <meta name="description" content="Provenance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
     <main className="px-4 md:px-0 mx-auto max-w-[1080px] bg-black">
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline text-white">
                Welcome to
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-4">
                Vitaran
              </span>
              <span className="block font-semibold text-white font-medium text-2xl">
                Supply Chain
              </span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Verify the authenticity of products by unique product ID.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
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
          {/* <div className="md:flex hidden my-auto w-[30%] md:w-[60%] ml-10 items-end">
            <Image
              src="/provenance.png"
              width="500"
              height="500"
              className="ml-10"
              alt="Banner"
            />
          </div> */}
        </div>
      </main>

    </>
  );
};

export default Home;
