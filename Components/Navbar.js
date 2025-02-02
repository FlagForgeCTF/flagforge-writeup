import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import { HiSun, HiMoon } from "react-icons/hi";
import { CgUserlane } from "react-icons/cg";
import { SiCodefactor } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io"; 
import { useDispatch } from "react-redux";

function Navbar({ topics }) {
  const [isMounted, setIsMounted] = useState(false); 
  const { theme, setTheme } = useTheme();
  const [viewAlert] = useState(false);
  const [alertMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true);
    const user = JSON.parse(localStorage.getItem("user"));
  }, []);

  const toggleTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };


  return (
    <>
      
      <header className="fixed w-full border-t-4 bg-white dark:bg-dark border-indigo-600 dark:border-indigo-900 shadow dark:shadow-2 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex">
              <Link href="/">
                <a className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50">
                  <span className="text-xl font-semibold">
                    <BiTerminal className="text-xl" />
                  </span>
                  <span className="mx-1 font-semibold text-base md:text-base">
                    Latest
                  </span>
                </a>
              </Link>

              <div className="dropdown inline-block relative mx-2">
                <a className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50 mx-6 cursor-pointer">
                  <span className="text-xl font-semibold">
                    <SiCodefactor className="text-sm" />
                  </span>
                  <span className="mx-1 font-semibold text-base md:text-base">
                    Posts
                  </span>

                  <span className="text-xl font-semibold">
                    <IoMdArrowDropdown className="text-xl" />
                  </span>
                </a>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 bg-white dark:bg-dark w-40 pt-6 rounded-xl left-1/3">
                  {topics.map((topic) => (
                    <Link href={`/topic/${topic}`} key={topic}>
                      <li className="cursor-pointer">
                        <a className="rounded-xl bg-white dark:bg-dark text-gray-800 dark:text-gray-50 py-2 px-4 block whitespace-no-wrap">
                          {topic}
                        </a>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center -mx-3">
              <button
                className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50"
                onClick={toggleTheme}
              >
                <span className="text-lg">
                  {isMounted && theme === "dark" ? (
                    <HiSun className="text-xl" />
                  ) : (
                    <HiMoon className="text-xl" />
                  )}
                </span>
              </button>

              <Link href="/about">
                <a className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50">
                  <span className="text-xl">
                    <CgUserlane className="text-xl" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
