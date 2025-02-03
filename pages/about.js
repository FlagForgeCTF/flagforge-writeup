import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaFlag, FaLaptop, FaLinkedin } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function About({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/flagforge-logo.png" className="h-64" alt="FlagForge Logo" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Welcome to {" "}
          <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
            FlagForge
          </span>
          , the ultimate CTF platform!
        </h2>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
          FlagForge is a Capture The Flag (CTF) platform designed for cybersecurity enthusiasts and professionals.
          Our mission is to provide an engaging and educational experience through a variety of security challenges
          ranging from web exploitation, reverse engineering, cryptography, forensics, and more.
        </p>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
          Whether you're a beginner looking to sharpen your skills or an expert seeking a challenge, FlagForge has
          something for everyone. Join us in the pursuit of flags and elevate your cybersecurity knowledge!
        </p>

        <div className="text-center pt-8">
          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/FlagForgeCTF?tab=repositories"
            >
              Explore Challenges
            </a>
          </button>

          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-indigo-600">
            <FaLinkedin />
            <a
              className="twitter-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/"
            >
              Connect with Us!
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;