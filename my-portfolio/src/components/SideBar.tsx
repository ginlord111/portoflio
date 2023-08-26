
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SideBar = () => {
  return (
    <div className="hidden md:flex fixed flex-col top-[35%] left-[0%] ">
      <ul className="flex flex-col">
        <li className="w-[160px] ml-[-100px] hover:ml-[1px]  duration-300 bg-gray-800 px-15 py-2 rounded-sm">
          <a href="/" className="flex justify-between items-center ">
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[160px] ml-[-100px] hover:ml-[1px]  duration-300 bg-[#333333] px-15 py-2 rounded-sm">
          <a href="/" className="flex justify-between items-center">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] ml-[-100px] hover:ml-[1px]  bg-blue-600  duration-300 px-15 py-2 rounded-sm">
          <a
            href="/"
            className="flex justify-between items-center"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] ml-[-100px] hover:ml-[1px] bg-[#565f69] duration-300 px-15 py-2 rounded-sm">
          <a href="/" className="flex justify-between items-center">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
