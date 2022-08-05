import { ICard } from "../interface/jsondata";

export function Minicard({ titulo, info, images }: ICard) {
  return (
    <div className="justify-center trainsition ease-in-out hover:scale-110 duration-300 ">
      <div
        className="rounded-lg drop-shadow-md py-20 h-44 font-poppins text-lg font-semibold text-center cursor-pointer"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="text-blue font-semibold uppercase text-center pt-2">{titulo}</div>
    </div>

  );
}
