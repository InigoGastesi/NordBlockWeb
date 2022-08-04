import { useContext } from "react";
import {
    Route,
    Routes
  } from "react-router-dom";
import { ProductInfo, Home, Contacto } from "../screens";
import Context from "../context/Context";



export function Router() {
    const screenInfo = useContext(Context);
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {screenInfo?.map(({ screen, titulo, route }) => {if(screen!="Contacto"){return <Route path={route} element={<ProductInfo screen={screen} titulo={titulo}/>}></Route>}})}
            <Route path="/contacto" element={<Contacto></Contacto>}/>
        </Routes>
    )
}