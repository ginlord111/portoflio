import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FaGithub, FaShareSquare, } from "react-icons/fa";
import {PiBowlFoodFill} from 'react-icons/pi'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
    });
  }, []);
  return (
    <div className="w-full h-fit bg-[#0a192f] text-gray-300 " id="work">
      {/*/SPOTIFY CLONE*/}
      <div className="flex flex-col justify-center items-center w-full h-full gap-4">
        <h3 className="font-semibold text-xl text-white">Works</h3>
        <h2 className="text-blue-400 font-semibold text-2xl">
          Projects that i develop
        </h2>
        <div className="flex  w-[70%] items-center justify-center p-5  gap-[30px] mb-[300px]">
          <div
            className="flex items-center truncate flex-[0.50] justify-center relative"
            data-aos="fade-right"
          >
            <img
              src="./src/assets/project-spotify.PNG"
              alt="none"
              className="w-[10px] md:w-full"
            />
          </div>
          <div
            className="flex flex-col flex-[0.50] justify-between max-w-[400px] gap-[2.5em]"
            data-aos="fade-left"
          >
            <h2 className="text-green-400 font-semibold h-full">
              Spotify Clone <FontAwesomeIcon icon={faSpotify} size="xl" />
            </h2>
            <p className="text-base text-gray-400 font-semibold">
              Introducing my Spotify Clone website, a unique twist on the
              classic music streaming experience. Unlike traditional platforms
              that rely on external APIs, my Spotify Clone empowers users to
              curate their own musical haven by uploading and organizing their
              personal music collection.
            </p>
            <div className="flex gap-[30px] text-white font-bold">
              <p>Next JS</p>
              <p>Tailwind</p>
              <p>Supabase</p>
            </div>
            <div className="flex gap-[30px] text-white font-bold text-lg cursor-pointer">
              <a
                href="https://clone-spotify-pend6f3po-ginlord111.vercel.app/"
                target="_blank"
              >
                <p>
                  Live Demo <FaShareSquare className="inline-block" size={24} />
                </p>
              </a>
              <a href="https://github.com/ginlord111/REACT-NEXT-JS.git"  target="_blank">
               
                <p>
                  Code <FaGithub className="inline-block" size={25} />
                </p>
              </a>
            </div>
          </div>
        </div>

        {/*/RECIPE PROJECT*/}
        <div className="flex  w-[70%] items-center justify-center p-5  gap-[30px] mt-[40px]">
          <div
            className="flex flex-col flex-[0.50] justify-between max-w-[400px] gap-[2.5em]"
            data-aos="fade-right"
          >
            <h2 className="text-white font-semibold h-full">
              Recipe Website <PiBowlFoodFill size={25} className="inline-block"/>
            </h2>
            <p className="text-base text-gray-400 font-semibold">
              Recipe Website is a dynamic recipe-sharing website where users can
              register, log in, and contribute their favorite recipes. The
              platform goes beyond the ordinary recipe website by enabling users
              to not only upload recipes but also share their unique cooking
              experiences through engaging descriptions and mouthwatering
              images.
            </p>
            <div className="flex gap-[30px] text-white font-bold">
              <p>React</p>
              <p>Tailwind</p>
              <p>Mongo DB</p>
            </div>
            <div className="flex gap-[30px] text-white font-bold text-lg cursor-pointer">
              <a
                href="https://recipe-secret.netlify.app/"
                target="_blank"
              >
                <p>
                  Live Demo <FaShareSquare className="inline-block" size={24} />
                </p>
              </a>
              <a href="https://github.com/ginlord111/recipe-website.git" target="_blank">
                <p>
                  Code <FaGithub className="inline-block" size={25} />
                </p>
              </a>
            </div>
          </div>
          <div
            className="flex items-center truncate flex-[0.50] justify-center relative"
            data-aos="fade-left"
          >
            <img
              src="./src/assets/recipe-project.PNG"
              alt="none"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
