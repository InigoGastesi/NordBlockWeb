import { Navbar, Card } from "../components";
import background from "../assets/deposito_1.jpg";

export function Home() {
  return (
    <div className="grid grid-cols-2 w-screen gap-8 p-8">
      <div className="md:col-span-2">
        <Card image={background}></Card>
      </div>
      <Card image={background}></Card>
      <Card image={background}></Card>
    </div>
  );
}
