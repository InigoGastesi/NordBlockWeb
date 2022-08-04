import { ICard } from "../interface/jsondata";

export function Card({ titulo, info, images }: ICard) {
  return (
    
    <div
      className={`rounded-lg drop-shadow-md min-h-80 py-10 w-full`}
      style={{ backgroundImage: `url(${images[0]})`, backgroundSize: "cover" }}
    >
      
      <div className="md:flex flex-col font-poppins w-1/2 p-8">
        <h1 className="font-poppins font-bold uppercase">{titulo}</h1>
        <p>
          {info}
        </p>
      </div>
    </div>
  );
}
