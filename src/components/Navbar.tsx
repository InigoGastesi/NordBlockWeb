import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/NordBlock_-_Horizontal_-_Full_color_-_Digital_-_Small_-_Alpha.svg";
import Context from "../context/Context";


export function Navbar() {
  const screenInfo = useContext(Context)
  const navigate = useNavigate();

  return (
    <nav className="bg-blue flex justify-between py-4 px-0">
      <div className="flex flex-1 flex-row justify-between my-auto">
        <img src={logo} />

        <div className="hidden md:block">
          <ul className="flex flex-row grow">
            {screenInfo?.map(({ screen, route }) => {return <li className="p-4 font-poppins text-white hover:text-pink cursor-pointer" onClick={()=>navigate(route)}>{screen}</li>})}
          </ul>
        </div>
      </div>
    </nav>
  );
}
