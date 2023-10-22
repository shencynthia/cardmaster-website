import Nav from "./components/navbar";
import trades from "./trades.svg";
import Hover from "react-3d-hover";
import c1 from "./img/c1.png";
import c2 from "./img/c2.png";
import c3 from "./img/c3.png";
import c4 from "./img/c4.png";
import { Element } from "react-scroll";
import YoutubeEmbed from "./components/YoutubeEmbed";


const images = [
  {
    img: c1,
    name: "Chase Sapphire",
    rewards: ["$200 Signup Bonus", "1% Cashback on American Airlines"],
  },
  {
    img: c2,
    name: "Discover",
    rewards: [
      "$100 Signup Bonus with Referral",
      "1% Cashback on American Airlines",
    ],
  },
  {
    img: c3,
    name: "American Express Magnet Card",
    rewards: ["$250 Signup Bonus", "1% Cashback on American Airlines"],
  },
  {
    img: c4,
    name: "Delta SkyMiles Blue",
    rewards: [
      "$200 Signing Bonus",
      "Earn 3 miles per dollar on Delta purchases",
    ],
  },
];

function App() {
  return (
    <div class="bg-hero-pattern bg-cover bg-center m-0, p-0 h-screen content-between">
      <Element name="home">
      <Nav />
        <div class="w-[90%] select-none mx-auto mt-20 flex, flex-column">
          <img
            class="pointer-events-none w-[40%] mt-[2rem]"
            src={trades}
            alt="become the jack of all cards"
          ></img>
          <p class="text-2xl mt-[2rem] w-[35%]">
            Elevate your rewards game with <b>credit churning at your fingertips.</b><br />
            <br />
            Receive credit card suggestions <b>tailor-made</b> for your needs. 
            <br /><br />
          </p>
          <div class="mt-[1rem] ">
            <a
              href="https://devpost.com/software/cardmaster"
              class="relative inline-flex items-center justify-center px-8 py-5 overflow-hidden font-medium text-indigo-600 border-double border-2 border-[#ffffff8a] rounded-lg shadow-2xl group"
            >
              <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#fe644d] rounded-full blur-md ease"></span>
              <span class="absolute inset-0 w-full h-full transition duration-1000 group-hover:rotate-180 ease-in-out">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ed4c17] rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ED171B] rounded-full blur-md"></span>
              </span>
              <span class="relative font-bold text-xl text-white">Get Started →</span>
            </a>
          </div>
          <div
            className="image-gallery"
            class="mx-auto mt-[4rem] w-2/3 bg-white p-5 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-xl border-2 border-white border-opacity-20"
          >
            <div class="w-[100%] flex justify-center mt-[1rem] mb-[1rem]">
              <h1 class="font-bold inline text-3xl bg-gradient-to-r from-[#F89F1A] to-[#ED171B] bg-[length:100%_6px] bg-no-repeat bg-bottom">
                Recommendations based on your activity
              </h1>
            </div>
            <div class="flex flex-row flex-wrap justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  class="w-[45%] m-[.5rem] bg-white p-5 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-xl border-2 border-white border-opacity-20"
                >
                  <Hover scale={1.05} perspective={900} speed={500}>
                    <img
                      key={index}
                      src={image.img}
                      class="w-inherit shadow-none hover:shadow-xl border-none rounded-xl hover:border"
                      alt="hello"
                    />
                  </Hover>
                  <h1 class="mt-[1rem] font-bold">{image.name}</h1>
                  <h1 class="mt-[1rem] font-medium">Rewards offered: </h1>
                  <ul>
                    {image.rewards.map((reward, i) => (
                      <li>{reward}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="">
                  <div class="mt-[1rem] ">
                <a
                  href="https://devpost.com/software/cardmaster"
                  class="relative inline-flex items-center justify-center px-8 py-5 overflow-hidden font-medium text-indigo-600 border-double border-2 border-[#ffffff8a] rounded-lg shadow-2xl group"
                >
                  <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#fe644d] rounded-full blur-md ease"></span>
                  <span class="absolute inset-0 w-full h-full transition duration-1000 group-hover:rotate-180 ease-in-out">
                  <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ed4c17] rounded-full blur-md"></span>
                  <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ED171B] rounded-full blur-md"></span>
                  </span>
                  <span class="relative font-bold text-xl text-white">Get Started →</span>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="about">
        <div className="w-[50%] mx-auto mt-10 p-10 border-2 border-[#FFFFFF30]">
          <YoutubeEmbed embedId="x5toTJtj-X0" />
        </div>
        
      </Element>
      <Element name="services">
        <div></div>
      </Element>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
