

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import NextJS from '../assets/nextjs.png';
import SupaBase from '../assets/supabase.png';
import TypeScript from  '../assets/typescript.png';
import Express from '../assets/express.png';
import Vue  from '../assets/vue_logo.png';
import Nuxt from   '../assets/nuxt_logo.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const Skills = () => {
    useEffect(() => {
        AOS.init({
          offset: 500,
        });
      }, []);

  return (
    // give name attribut for the naviagation
    <div  className=' bg-[#0a192f] text-gray-300 h-fit w-full relative top-[500px] z-[-1]'>
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full pt-[500px]' id='skills' >
          <div data-aos='fade-left'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// Stacks that I'm familiar with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-semibold' data-aos='fade-right'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-transparent'>
                  <img className='w-20 mx-auto' src={SupaBase} alt="HTML icon" />
                  <p className='my-4'>SUPABASE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NextJS} alt="HTML icon" />
                  <p className='my-4'>NEXT JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={TypeScript} alt="HTML icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                  <p className='my-4'>EXPRESS JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Vue} alt="HTML icon" />
                  <p className='my-4'>Vue</p>
              </div>
              <div className='shadow-md shadow-[#040c16] bg-transparent hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nuxt} alt="HTML icon" />
                  <p className='my-4'>Nuxt JS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;