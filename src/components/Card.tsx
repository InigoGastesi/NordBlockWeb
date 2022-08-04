import { ICard } from "../interface/jsondata";
import { Element } from "react-scroll"

export function Card({ titulo, info, images }: ICard) {
  return (
    
    <div
      className={`rounded-lg drop-shadow-md py-20 min-h-80 w-full`}
      style={{ backgroundImage: `url(${images[0]})`, backgroundSize: "cover" }}
    >
      
      <div className="flex flex-col font-poppins w-1/2 p-8">
        <div>{titulo}</div>
        <div>
          {info}
        </div>
      </div>
    </div>
  );
}
