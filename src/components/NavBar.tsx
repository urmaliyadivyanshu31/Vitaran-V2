import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMoon, BiSun } from "react-icons/bi";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";
import {
  Flex,
  Box,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const { pathname } = useRouter();

  return (
    <>
      <nav className="fixed z-10 w-full mx-auto bg-blue-200 bg-opacity-60 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 dark:bg-opacity-60 drop-shadow-lg dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.25)]">
        <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center flex-1">
            <span className="flex flex-row items-center self-center text-xl font-bold whitespace-nowrap text-[#9504ff] hover:text-[#a137df] dark:text-[#2fceff]">
              <Image
                src="/provenanceLogo.png"
                width="70"
                height="70"
                className="mr-2"
                alt="Provenance"
              />
              Provenance
            </span>
          </Link>
          <div className="flex md:order-2" style={{ marginLeft: "2rem" }}>
            <ConnectKitButton />
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="ml-2 md:ml-0 inline-flex items-center py-2 px-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu size="20" />
            </button>
          </div>
          <div
            className={`${
              isOpenMenu ? "block" : "hidden"
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li></li>
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                  } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className={`${
                    pathname === "/products"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                  } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Explore</b>
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className={`${
                    pathname === "/register"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                  } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Register</b>
                </Link>
              </li>
              <li>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Link
                      href="#"
                      className={`${
                        pathname === "#"
                          ? "text-[#a137df] dark:text-white"
                          : "text-gray-700"
                      } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                      aria-current="page"
                    >
                      <b>Products</b>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent className="bg-blue-100 bg-opacity-80 box-border h-25 w-35 dark:bg-black/40 dark:bg-opacity-80 dark:text-white/80 shadow-lg rounded-xl border-1 p-4 min-w-sm">
                    <Link
                      href="/addproduct"
                      className="group display-block p-2 rounded-md hover:bg-blue-200 hover:text-[#008dff]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:blue-400">
                            {"Add Product"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                    <Link
                      href="/updateproduct"
                      className="group display-block p-2 rounded-md hover:bg-blue-200 hover:text-[#008dff]"
                    >
                      <Stack direction={"row"} align={"center"}>
                        <Box>
                          <Text className="font-semibold pb-1 transition ease-in-out delay-10 group-hover:blue-400">
                            {"Update Status"}
                          </Text>
                        </Box>
                        <Flex className="transition ease-in-out delay-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 justify-flex-end flex self-center flex-1">
                          <Icon w={15} h={15} as={ChevronRightIcon} />
                        </Flex>
                      </Stack>
                    </Link>
                  </PopoverContent>
                </Popover>
              </li>
              <li>
                <Link
                  href="/producthistory"
                  className={`${
                    pathname === "/producthistory"
                      ? "text-[#a137df] dark:text-white"
                      : "text-gray-700"
                  } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9504ff] md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <b>Product History</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="z-10 bg-[#008dff] w-9 h-9 fixed bottom-[18px] right-[50px] flex justify-center items-center rounded-full">
        {theme === "dark" ? (
          <BiMoon
            size="25"
            onClick={switchTheme}
            className="text-white hover:cursor-pointer"
          />
        ) : (
          <BiSun
            size="20"
            onClick={switchTheme}
            className="text-white hover:cursor-pointer"
          />
        )}
      </div>
    </>
  );
};

export default Header;
