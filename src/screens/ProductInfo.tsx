import { Navbar, Card, Minicard, Productdescriptor } from "../components";
import Context from "../context/Context";
import { useContext } from "react";
import { IScreen } from "../interface/jsondata";
import { Link, Element } from "react-scroll";

export function ProductInfo({ screen, titulo }: IScreen) {
  const screenInfo = useContext(Context);
  let data = screenInfo?.find((e) => e.screen == screen);

  let cards = data?.cards;
  return (
    <div>
      <h1 className="font-poppins md:py-8 md:px-32 text-blue font-bold text-3xl">
        {titulo}
      </h1>
      <div className="grid grid-cols-3 w-screen md:gap-20 md:p-8 md:px-80">
        {cards?.map(({ titulo, info, images }) => {
          return (
            <Link activeClass="active" to={titulo} smooth={true} duration={500}>
              <Minicard titulo={titulo} info={info} images={images}></Minicard>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-1 w-screen gap-8 md:px-80 sm:px-2 h-screen">
        {cards?.map(({ titulo, info, images }) => {
          return (
            <div className="md:h-[28rem] pt-2 sm:h-screen">
              <Element name={titulo}></Element>
              <Productdescriptor
                titulo={titulo}
                info={info}
                images={images}
              ></Productdescriptor>
            </div>
          );
        })}
      </div>
    </div>
  );
}
