import logo from "../logo.png";

function Nav() {
  return (
    <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt = "logo" className=""/> 
        <ul class="flex space-x-4">
        <li><a href="#" class="text-black">Home</a></li>
        <li><a href="#" class="text-black">About</a></li>
        <li><a href="#" class="text-black">Services</a></li>
        <li><a href="#" class="text-black   ">Contact</a></li>
    </ul>
    </div>
  );
}

export default Nav;
