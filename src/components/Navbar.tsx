import { useNavigate } from "react-router-dom";
import logo from "../assets/NordBlock_-_Brandmark_-_Full_color_-_Digital_-_Alpha.svg";
import screenInfo from "../info.json"

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue w-screen flex  justify-between py-2">
      <div className="flex flex-1 flex-row justify-between my-auto px-10">
        <img src={logo} />

        <div>
          <ul className="flex flex-row grow">
            <li
              className="font-poppins cursor-pointer"
              onClick={() => navigate("/")}
            >
              Inicio
            </li>
            <li
              className="font-poppins cursor-pointer"
              onClick={() => navigate("/deposito")}
            >
              Depósito
            </li>
            <li className="font-poppins cursor-pointer">Gradas y vigas</li>
            <li className="font-poppins cursor-pointer">Cementerios</li>
            <li className="font-poppins cursor-pointer">Losas</li>
            <li className="font-poppins cursor-pointer">Muros de contención</li>
            <li className="font-poppins cursor-pointer">Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
