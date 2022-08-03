import { Navbar, Card, Minicard, Productdescriptor } from "../components";
import background from "../assets/deposito_1.jpg";
import Context from "../context/Context";
import { useContext } from "react";
import { IScreen } from "../interface/jsondata";


export function Deposito({screen, titulo}:IScreen) {
  const screenInfo = useContext(Context);
  let data = screenInfo?.find((e) => e.screen == screen);

  let cards = data?.cards;
  return (
    <div>
      <h1 className="font-poppins py-8 px-32 text-blue font-bold text-3xl">{titulo}</h1>
      <div className="grid grid-cols-3 w-screen gap-20 p-8 px-80">
        {cards?.map(({ titulo, info, images }) => {
          return (
            <Minicard titulo={titulo} info={info} images={images}></Minicard>
          );
        })}
      </div>
      <div className="grid grid-cols-1 w-screen gap-8 p-8 px-80 h-screen">
        {cards?.map(({ titulo, info, images }) => {
          return (
            <Productdescriptor titulo={titulo} info={info} images={images}></Productdescriptor>
          );
        })}
      </div>
    </div>
  );
}
