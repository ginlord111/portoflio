import { FaGithub, FaShareSquare } from "react-icons/fa";
import AOS, { AosEvent } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Works from "../constant/workData";
import { AiFillYoutube } from "react-icons/ai";
const Work = () => {
  useEffect(() => {
    AOS.init({
      offset: 500,
    });
    document.addEventListener("aos:in", handleAOSIn);

    return () => {
      document.removeEventListener("aos:in", handleAOSIn);
    };
  }, []);

  const handleAOSIn = (event: AosEvent | any) => {
    const animatedElement = event.detail;
    const animatedChild = animatedElement.querySelector(
      ".animated"
    ) as HTMLElement;
    if (animatedChild) {
      animatedChild.classList.add("opacity-100");
    }
    animatedElement.removeAttribute("data-aos");
  };

  return (
    <div className="lg:w-full  h-fit  text-gray-300 z-[-1] " id="work">
      <h3 className="font-semibold text-xl text-center text-white">Works</h3>
      <h2 className="text-blue-400 font-semibold text-2xl text-center">
        Projects that i develop
      </h2>
      <div className="flex flex-col justify-center items-center w-full   h-full gap-4">
        {Works.map((work) => (
          <div className="flex  flex-col md:flex-row  first-line:items-center justify-center md:space-x-20 space-y-7 p-5 mb-[300px]">
            <div
              className="flex items-center  flex-[0.50] justify-center"
              data-aos="fade-right"
            >
              <img src={work.imgSrc} alt="none" className="w-full" />
            </div>
            <div
              className="flex flex-col flex-[0.50] max-w-[400px] space-y-5"
              data-aos="fade-left"
            >
              <div className="flex gap-x-3 md:justify-start justify-center">
                <h2
                  className={`text-gray-400 font-semibold h-full text-xl  ${work.textColor}`}
                >
                  {work.name}
                </h2>
                <img src={work.icon} alt="none" className="w-7 h-7" />
              </div>

              <p className="text-base text-gray-400 font-semibold">
                {work.desc}
              </p>
              <div className="flex gap-[30px] text-white font-bold">
                {work.techStacks.map((tech) => (
                  <p>{tech}</p>
                ))}
              </div>
              <div className="flex gap-[30px] text-white font-bold text-lg cursor-pointer">
                <a href={work.demoLink} target="_blank">
                  <p>
                    Live Demo
                    <FaShareSquare className="inline-block" size={24} />
                  </p>
                </a>
                <a href={work.codeLink} target="_blank">
                  <p>
                    Code <FaGithub className="inline-block" size={25} />
                  </p>
                </a>
                {work.ytLink && (
                  <a href={work.ytLink} target="_blank">
                    <p>
                      Video <AiFillYoutube className="inline-block" size={25} />
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
