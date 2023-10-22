import logo from "../logo.svg";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <div className="container mx-auto flex justify-between items-center w-[100%] h-[10%] p-[1rem]">
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
