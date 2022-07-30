import { Navbar, Card } from "../components";

export function Deposito() {
  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="grid p-8 place-items-center">
        <Card></Card>
      </div>
      <ul className="flex flex-row justify-center p-4">
        <li className="w-screen"><Card></Card></li>
        <li className="w-screen"><Card></Card></li>
      </ul>
    </div>
  );
}
