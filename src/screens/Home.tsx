import { Card, Minicard } from "../components";
import background from "../assets/deposito_1.jpg";
import Context from "../context/Context";
import { useContext } from "react";

export function Home() {
  const screenInfo = useContext(Context);
  let data = screenInfo?.find((e) => e.screen == "Home");
  let cards = data?.cards;
  return (
    <div className="grid grid-cols-2 w-screen gap-8 p-8">
      <div className="md:col-span-2">
        <Card
          titulo={data!.cards[0].titulo}
          info={data!.cards[0].info}
          images={data!.cards[0].images}
        ></Card>
      </div>
      {cards?.map(({ titulo, info, images }, i) => {
        if (i != 0) {
          return <div className="sm:col-span-2 md:col-span-1"><Card titulo={titulo} info={info} images={images} /></div>;
        }
      })}        
    </div>
    
  );
}
