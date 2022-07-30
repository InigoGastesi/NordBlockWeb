import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { Navbar, Card } from "./components";
import { Router } from "./router";
import { Home } from "./screens";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
