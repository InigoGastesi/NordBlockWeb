import { ICard } from "../interface/jsondata";

export function Productdescriptor({ titulo, info, images }: ICard) {
  return (
    <div className="xl:flex xl:flex-row xl:gap-x-8 w-full drop-shadow-md rounded-md bg-gray-100 justify-between">
      <div
        className=" rounded-l-lg drop-shadow-md px-72 justify-between"
        style={{
          backgroundImage: `url(${images![0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        ></div>
      <div className="font-poppins py-4 xl:w-1/2 w-full p-4 mr-4">
        <h1 className="font-bold text-xl text-blue">{titulo}</h1>
        <p className="pt-4">{info}</p>
      </div>
    </div>
  );
}
