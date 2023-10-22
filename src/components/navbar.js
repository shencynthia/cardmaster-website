import logo from "../logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <div className="container mx-auto flex justify-between items-center w-full p-[1rem] pt-4 pb-2 sticky top-4 z-50 bg-grey bg-opacity-20 backdrop-blur-md rounded-lg">
      <img src={logo} alt="logo" className="w-[20%]" />
      <ul className="flex space-x-4">
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-black cursor-pointer"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-black cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="text-black cursor-pointer"
          >
            Services
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
