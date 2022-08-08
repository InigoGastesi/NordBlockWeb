import { ICard } from "../interface/jsondata";

export function Card({ titulo, info, images }: ICard) {
  return (
    
    <div
      className={`rounded-lg drop-shadow-md min-h-80 py-10 w-full`}
      style={{ backgroundImage: `url(${images![0]})`, backgroundSize: "cover" }}
    >
      
      <div className="flex flex-col font-poppins w-1/2 p-8">
        <h1 className="text-blue font-poppins font-bold uppercase">{titulo}</h1>
        <p className="pt-4">
          {info}
        </p>
      </div>
    </div>
  );
}
