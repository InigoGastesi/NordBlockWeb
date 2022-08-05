import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Navbar, Card } from "./components";
import { Router } from "./router";
import { Home } from "./screens";
import screenInfo from "./info.json";
import Context from "./context/Context";

function App() {
  return (
    <div className="w-screen">
      <Context.Provider value={screenInfo}>
        <BrowserRouter>
          <Navbar />
          <Router />
        </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
}

export default App;
