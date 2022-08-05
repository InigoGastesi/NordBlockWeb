import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logolarge from "../assets/NordBlock_-_Horizontal_-_Full_color_-_Digital_-_Small_-_Alpha.svg";
import logo from "../assets/NordBlock_-_Brandmark_-_Full_color_-_Digital_-_Alpha.svg";
import Context from "../context/Context";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export function Navbar() {
  const screenInfo = useContext(Context);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="bg-blue flex flex-col justify-between py-4 px-0">
      <div className="flex flex-1 lg:flex-row justify-between justify-items-center lg:my-auto lg:px-0 px-8">
        <img src={logolarge} onClick={() => navigate("/")} className="hidden lg:block" />
        <img src={logo} onClick={() => navigate("/")} className="lg:hidden block" />

        <div className="hidden lg:block">
          <ul className="flex flex-row grow">
            {screenInfo?.map(({ screen, route }) => {
              return (
                <li
                  className="p-4 font-poppins text-white hover:text-pink cursor-pointer text-base"
                  onClick={() => navigate(route)}
                >
                  {screen}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:hidden text-pink pt-2" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-10" /> : <XIcon className="w-10" />}
        </div>
      </div>
      <div className="block lg:hidden">
        <ul className={!nav ? "hidden" : "w-full"}>
          {screenInfo?.map(({ screen, route }) => {
            return (
              <li
                className="p-4 font-poppins text-sm
                text-white hover:text-pink cursor-pointer"
                onClick={() => navigate(route)}
              >
                {screen}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
