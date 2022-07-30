import {
    Route,
    Routes
  } from "react-router-dom";
import { Deposito, Home } from "../screens";



export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/deposito" element={<Deposito/>}/>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    )
}