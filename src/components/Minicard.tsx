import { ICard } from "../interface/jsondata";

export function Minicard({ titulo, info, images }: ICard) {
  return (
    <div
      className="trainsition ease-in-out hover:scale-110 duration-300 rounded-lg drop-shadow-md py-20 min-h-80 font-poppins text-lg font-semibold text-center cursor-pointer"
      style={{ backgroundImage: `url(${images[0]})`, backgroundSize: "cover" }}
    >
      {titulo}
    </div>
  );
}
