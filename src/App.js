import Nav from "./components/navbar"
import trades from "./trades.svg"
import Hover from 'react-3d-hover';
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
import c4 from "./img/c4.png"


const images = [{img: c1, name: "Chase Sapphire", rewards: ["$200 Signup Bonus", "1% Cashback on American Airlines"]}, {img: c2, name: "Discover", rewards: ["$100 Signup Bonus with Referral", "1% Cashback on American Airlines"]}, {img: c3, name:"American Express Magnet Card", rewards: ["$250 Signup Bonus", "1% Cashback on American Airlines"]}, {img: c4, name: "Delta SkyMiles Blue", rewards: ["$200 Signing Bonus", "Earn 3 miles per dollar on Delta purchases"]}]

function App() {
  return (
    <div class="bg-hero-pattern bg-cover bg-center h-screen content-between">
      <Nav />
      <div class="w-[90%] select-none  mx-auto flex, flex-column">
        <img class="w-[40%] mt-[2rem]" src={trades} alt="become the jack of all cards"></img>
        <p class="text-2xl mt-[2rem]"> credit churning at your fingertips <br /> 
        get best credit cards rewards personalized for you </p>
        <div class="">
        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
          <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#fe644d] rounded-full blur-md ease"></span>
          <span class="absolute inset-0 w-full h-full transition duration-1000 group-hover:rotate-180 ease-in-out">
          <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ed4c17] rounded-full blur-md"></span>
          <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ED171B] rounded-full blur-md"></span>
          </span>
          <span class="relative font-bold text-white">Get Started → </span>
          </a>
        <button className="padding-minus-2px cursor-pointer mt-[2rem] mr-[1rem] border-2 border-black rounded-lg text-black transition duration-300 hover:border-gradient-to-r from-[#F89F1A] to-[#ED171B]" > Learn More </button>
        <button class="cursor-pointer mt-[2rem] bg-black text-white p-[1rem] rounded-lg transition duration-0 ease-in-out hover:duration-150 hover:bg-gradient-to-r from-[#F89F1A] to-[#ED171B]"> Get Started → </button>

        </div>
        <div className="image-gallery" class="mx-auto mt-[4rem] w-2/3 bg-white p-5 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-xl border-2 border-white border-opacity-20">
          <div class="w-[100%] flex justify-center mt-[1rem] mb-[1rem]">
            <h1 class="font-bold inline text-3xl bg-gradient-to-r from-[#F89F1A] to-[#ED171B] bg-[length:100%_6px] bg-no-repeat bg-bottom">Recommendations based on your activity</h1>
          </div>
          <div class="flex flex-row flex-wrap justify-center">
          {images.map((image, index) => (
            <div key={index} class="w-[45%] m-[.5rem] bg-white p-5 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-xl border-2 border-white border-opacity-20">
              <Hover scale={1.05} perspective={900} speed={500}>
                <img key={index} src={image.img} class="w-inherit shadow-none hover:shadow-xl border-none rounded-xl hover:border" />
              </Hover>
              <h1 class="mt-[1rem] font-bold">{image.name}</h1>
              <h1 class="mt-[1rem] font-medium">Rewards offered: </h1>
              <ul>
              {image.rewards.map((reward, i)=>(
                  <li>{reward}</li>
              ))}
              </ul>
            </div>
          ))}
          <button></button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
