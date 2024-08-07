import { HiArrowNarrowRight } from "react-icons/hi";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="bg-[rgb(10,25,47)] w-full h-full" id="home">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center  h-full">
        <p className="text-sm text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ronnie Nicandro
        </h1>
        <div className="animated-typing">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            <ReactTyped
              strings={[
                'Front-end Developer',
                'Frontend Engineer',
                'React Developer',
                'Vue Developer',
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
              showCursor
            />
          </h2>
        </div>
        <p className="text-[#8892b0] py-4 max-w-[700px] mt-[30px]">
          👋 Hello and welcome! I'm thrilled to have you explore my portfolio as
          I embark on my journey as an aspiring Front End Developer. My name is
          Ronnie Nicandro, and I have a deep passion for crafting seamless user experience and
          user interfaces from the ground up. Within these virtual pages,
          you'll find a collection of projects, code snippets, and insights that
          showcase my dedication to mastering both the front-end 
          realms of web development.
        </p>
        <a href="#work">
          <button className="group border-2 border-white text-white max-w-[150px] flex gap-x-3 p-3 rounded-md hover:bg-pink-600 transition truncate hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
