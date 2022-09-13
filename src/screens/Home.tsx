import { Card, Footer, Minicard } from "../components";
import background from "../assets/deposito_1.jpg";
import Context from "../context/Context";
import { useContext } from "react";

export function Home() {
  const screenInfo = useContext(Context);
  let data = screenInfo?.find((e) => e.screen == "Home");
  let cards = data?.cards;
  return (
    <div className="flex flex-col mx-auto w-full h-screen">
      <head>
        <meta name="description" content="NordBlock Nord-Block nord block"></meta>
        <title>Nord Block: Prefabricado De Hormigón</title>
      </head>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:p-8 bg-scroll bg-cover bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/nord-block.appspot.com/o/imagen%20fondo%20home.jpg?alt=media&token=c0511313-4a3c-47dc-918a-89ed3d8f3f40')]">
        <div className="lg:col-span-2">
          <Card
            titulo={data!.cards![0].titulo}
            info={data!.cards![0].info}
            images={data!.cards![0].images}
            color={false}
          ></Card>
        </div>
        {cards?.map(({ titulo, info, images }, i) => {
          if (i != 0) {
            return (
              <div className="sm:col-span-2 md:col-span-1">
                <Card
                  titulo={titulo}
                  info={info}
                  images={images}
                  color={false}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}
