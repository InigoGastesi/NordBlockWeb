import { ICard } from "../interface/jsondata";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export function Productdescriptor({ titulo, info, images }: ICard) {
  return (
    <div className="lg:flex lg:flex-row md:gap-x-8 w-full drop-shadow-md rounded-md overflow-hidden bg-gray-100 justify-between">
      {/* <div
        className=" rounded-l-lg drop-shadow-md lg:w-1/2"
        style={{
          backgroundImage: `url(${images![0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        ></div> */}
      <div className="rounded-l-lg drop-shadow-md lg:w-1/2">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} className="object-fill">
          {images?.map((url)=>{return (<div><img src={url} className="object-fill rounded-l-md"></img></div>)})}
        </Carousel>
      </div>
      <div className="font-poppins py-4 lg:w-1/2 w-full p-4 mr-4">
        <h1 className="font-bold text-xl text-blue">{titulo}</h1>
        <p className="pt-4">{info}</p>
      </div>
    </div>
  );
}
