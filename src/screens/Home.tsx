import { Card, Footer, Minicard } from "../components";
import background from "../assets/deposito_1.jpg";
import Context from "../context/Context";
import { useContext } from "react";

export function Home() {
  const screenInfo = useContext(Context);
  let data = screenInfo?.find((e) => e.screen == "Home");
  let cards = data?.cards;
  return (
    <div className="flex flex-col w-full bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/nord-block.appspot.com/o/imagen%20fondo%20home.jpg?alt=media&token=622d28ce-4589-423c-92d7-f6dccc15a17b')] h-screen">
      <div className="grid grid-cols-2 w-full gap-8 p-8">
        <div className="md:col-span-2">
          <Card
            titulo={data!.cards![0].titulo}
            info={data!.cards![0].info}
            images={data!.cards![0].images}
            color={true}
          ></Card>
        </div>
        {cards?.map(({ titulo, info, images }, i) => {
          if (i != 0) {
            return (
              <div className="sm:col-span-2 md:col-span-1">
                <Card titulo={titulo} info={info} images={images} color={false}/>
              </div>
            );
          }
        })}
      </div>
      <div className="mt-auto"><Footer></Footer></div>
      
    </div>
  );
}
