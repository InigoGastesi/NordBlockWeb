import { ICard } from "../interface/jsondata";

export function Productdescriptor({ titulo, info, images }: ICard) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div
        className={`rounded-lg drop-shadow-md py-20 font-poppins text-lg font-semibold md:text-center justify-between`}
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="font-poppins">
        <h1 className="font-bold text-xl">{titulo}</h1>
        <p className="py-4">{info}</p>
      </div>
    </div>
  );
}
