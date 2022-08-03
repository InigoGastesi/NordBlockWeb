import { useContext } from "react";
import {
    Route,
    Routes
  } from "react-router-dom";
import { Deposito, Home } from "../screens";
import Context from "../context/Context";



export function Router() {
    const screenInfo = useContext(Context);
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {screenInfo?.map(({ screen, titulo, route }) => {return <Route path={route} element={<Deposito screen={screen} titulo={titulo}/>}></Route>})}
        </Routes>
    )
}