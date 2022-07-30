import background from "../assets/deposito_1.jpg";

export interface CardProops {
  image?: string;
}

export function Card({ image }: CardProops) {
  return (
    <div
      className={`rounded-lg drop-shadow-md py-20 min-h-80 w-full`}
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col font-poppins w-1/2 p-8">
        <div>NORD BLOCK</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus dolor nec justo aliquam dictum. Nam vulputate a arcu vitae
          ultricies. Curabitur in suscipit arcu. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos.
        </div>
      </div>
    </div>
  );
}
