import { ICard } from "../interface/jsondata";

export function Productdescriptor({ titulo, info, images }: ICard) {
  return (
    <div className="grid grid-cols-2 md:gap-x-8 h-full">
      <img
        src={images[0]}
        className="object-fill rounded-lg h-[28rem] w-full drop-shadow-md"
      ></img>
      <div className="font-poppins">
        <h1 className="font-bold text-xl text-blue">{titulo}</h1>
        <p className="pt-4">{info}</p>
      </div>
    </div>
  );
}
