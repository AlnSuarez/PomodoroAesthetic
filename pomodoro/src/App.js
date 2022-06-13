import Clock from "./components/clock";
import { useState } from "react";
import "./components/clock.css";
import Tareas from "./components/tareas";
import ClockApp from "./components/clockApp";

function App() {
  

  return (
    <div className="App">
      <div className="grid grid-cols-2 h-screen">
        <ClockApp/> 
        <Tareas />
      </div>
    </div>
  );
}

export default App;
