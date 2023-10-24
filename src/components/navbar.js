import logo from "../logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center p-[1rem] sticky top-4 z-50 bg-white bg-opacity-40 backdrop-blur-lg border-[#ffffff40] border-2 rounded-lg">
      <img src={logo} alt="logo" className="w-[20%]" />
      <ul className="flex space-x-10">
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-black text-lg font-bold cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-black text-lg font-bold cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
