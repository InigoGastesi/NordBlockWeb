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
    <div className="w-full">
      <h1 className="font-poppins lg:py-8 lg:px-32 text-blue font-bold text-center lg:text-3xl text-xl pt-4 px-14">
        {titulo}
      </h1>
      <div className="flex justify-center w-full">
        <div className="flex flex-col lg:w-3/5 w-5/6">
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-20 lg:gap-y-5 w-full">
            {cards?.map(({ titulo, info, images }) => {
              return (
                <Link
                  activeClass="active"
                  to={titulo}
                  smooth={true}
                  duration={500}
                  offset={-10}
                >
                  <Minicard
                    titulo={titulo}
                    info={info}
                    images={images}
                  ></Minicard>
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-8 py-8 w-full">
            {cards?.map(({ titulo, info, images }) => {
              return (
                <div className="lg:h-[29rem] pt-2">
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
      </div>
    </div>
  );
}
