import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 300, // Set the offset to 400 pixels
    });
    
  }, []);


  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300" id="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 w-full" data-aos='fade-right'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold" data-aos='fade-right'>
            <p>
              Hi. I'm Ronnie Nicandro, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className='text-gray-400 font-sm font-semibold' data-aos='fade-left'>
            <p>
              Feel free to explore my portfolio and immerse yourself in a
              collection that represents not just my work, but my passion for
              [designing/coding/creating]. I invite you to connect with me to
              discuss collaborations, share ideas, or simply to say hello. Thank
              you for visiting, and I hope you find inspiration in my
              [designs/codes/artworks]. Let's bring imagination to life
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
