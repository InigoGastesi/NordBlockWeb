import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Navbar, Card, Footer } from "./components";
import { Router } from "./router";
import { Home } from "./screens";
import screenInfo from "./info.json";
import Context from "./context/Context";

function App() {
  return (
    <div>
      <Context.Provider value={screenInfo}>
        <BrowserRouter basename="/">
          <Navbar />
          <Router />
        </BrowserRouter>
      </Context.Provider>     
    </div>
  );
}

export default App;
