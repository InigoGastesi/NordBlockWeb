import logolarge from "../assets/NordBlock_-_Horizontal_-_Full_color_-_Digital_-_Small_-_Alpha.svg";
import juntaLog from "../assets/junta_sub.jpg";
import juntaDoc from '../docs/CARTEL FEDER 21-27-CREACIÓN EMPRESAS- A3ICE.pdf';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";
import { HomeIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";

export function Footer() {
  const screenInfo = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="font-poppins w-full text-pink py-8 px-2 bg-blue mt-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 pt-4">
        <div>
          <img
            src={logolarge}
            onClick={() => navigate("/")}
            className="hidden lg:block"
          />
        </div>
        <div className="pr-14">
          <img
            src={juntaLog}
            onClick={() => window.open(juntaDoc, '_blank')}
            className="hidden lg:block cursor-pointer"
          />
        </div>
        <div>
          <h1 className="font-uppercase font-bold pb-8">Productos</h1>
          <ul className="flex flex-col grow">
            {screenInfo?.map(({ screen, route }, i) => {
              if (i != 0 && i != 6) {
                return (
                  <li
                    className="py-1 font-poppins text-white hover:text-pink cursor-pointer text-base"
                    onClick={() => navigate(route!)}
                  >
                    {screen}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div>
          <h1 className="font-uppercase font-bold pb-8">Contacto</h1>
          <ul className="flex flex-col grow">
            <li className="text-white flex flex-cols py-1">
              <div>
                <HomeIcon className="w-6"></HomeIcon>
              </div>
              <a
                className="pl-3 cursor-pointer"
                href="https://goo.gl/maps/arEScujSuzaAfDao8"
                target="_blank"
              >
                Carretera del Vascón Km. 2, 09612 Pinilla de los Barruecos,
                Burgos
              </a>
            </li>
            {/* <li className="text-white flex flex-cols py-1">
              <div>
                <PhoneIcon className="w-6"></PhoneIcon>
              </div>
              <p className="pl-3">+34 655 70 01 21</p>
            </li> */}
            <li className="text-white flex flex-cols py-1">
              <div>
                <MailIcon className="w-6"></MailIcon>
              </div>
              <a
                className="pl-3 cursor-pointer"
                href="mailto:igastesi@nord-block.com"
              >
                igastesi@nord-block.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
