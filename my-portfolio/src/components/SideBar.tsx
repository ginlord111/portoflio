
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SideBar = () => {
  return (
    <div className="hidden md:flex fixed flex-col top-[35%] left-[0%] ">
      <ul className="flex flex-col">
        <li className="w-[160px] ml-[-100px] hover:ml-[1px]  duration-300 bg-gray-800 px-15 py-2 rounded-sm">
          <a href="https://www.facebook.com/ssisjqjusjdnqnsjoqo" className="flex justify-between items-center" target='_blank'>
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[160px] ml-[-100px] hover:ml-[1px]  duration-300 bg-[#333333] px-15 py-2 rounded-sm">
          <a href="https://github.com/ginlord111" className="flex justify-between items-center" target='_blank'>
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] ml-[-100px] hover:ml-[1px]  bg-blue-600  duration-300 px-15 py-2 rounded-sm">
          <a
            href="https://linkedin.com/in/ronnie-nicandro-7a3191246"
            className="flex justify-between items-center"
            target='_blank'
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] ml-[-100px] hover:ml-[1px] bg-[#565f69] duration-300 px-15 py-2 rounded-sm">
          <a href="https://drive.google.com/file/d/12whcXtQgkduZOqXEu77NzbExUrdWfQFb/view?usp=sharing" target='_blank' className="flex justify-between items-center">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
