import { ICard } from "../interface/jsondata";

export function Card({ titulo, info, images, color }: ICard) {
  return (
    
    <div
      className={`rounded-lg drop-shadow-md min-h-80 py-10 w-full`}
      style={{ backgroundImage: `url(${images![0]})`, backgroundSize: "cover" }}
    >
      
      <div className="flex flex-col font-poppins lg:w-1/2 p-8">
        <h1 className={color ? 'text-blue font-poppins font-bold uppercase' : 'text-white font-poppins font-bold uppercase'}>{titulo}</h1>
        <p className={color ? 'text-blue pt-4 text-justify' : 'text-white pt-4 text-justify'}>
          {info}
        </p>
      </div>
    </div>
  );
}
