import { ICard } from "../interface/jsondata";

export function Productdescriptor({ titulo, info, images }: ICard) {
  return (
    <div className="flex flex-row md:gap-x-8 h-full drop-shadow-xl rounded-lg bg-gray-100 justify-between">
      <div className="w-1/2 overflow-y-hidden rounded-lg">
        <img
          src={images[0]}
          className="object-fill rounded-lg min-h-full w-full drop-shadow-md"
        ></img>
      </div>
      <div className="font-poppins py-4 w-1/2 mr-4">
        <h1 className="font-bold text-xl text-blue">{titulo}</h1>
        <p className="pt-4">{info}</p>
      </div>
    </div>
  );
}
