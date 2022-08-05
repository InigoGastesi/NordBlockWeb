import { ICard } from "../interface/jsondata";

export function Productdescriptor({ titulo, info, images }: ICard) {
  return (
    <div className="lg:flex lg:flex-row md:gap-x-8 h-full drop-shadow-md rounded-md bg-gray-100 justify-between">
      <img
        src={images[0]}
        className="hidden lg:block object-fill w-1/2 aspect-square rounded-l-md min-h-full drop-shadow-md"
      ></img>

      <div className="font-poppins py-4 lg:w-1/2 w-full p-4 mr-4">
        <h1 className="font-bold text-xl text-blue">{titulo}</h1>
        <p className="pt-4">{info}</p>
      </div>
    </div>
  );
}
