import React from "react";
import Clock from "./clock";
import { useState } from "react";

const ClockApp = () => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [estado, setEstado] = useState("Descanso");

  const handleAddMin = () => {
    if (min < 60) {
      setMin(min + 1);
    }
  };

  const handleDecMin = () => {
    if (min > 1) {
      setMin(min - 1);
    }
  };
  return (
    <div className="m-10">
      <div className="text-xl flex text-white justify-center w-max font-mono">{estado}</div>
      <Clock min={min} sec={sec} />
      <div className="grid grid-cols-2 w-full h-10 p-10  bg-gray-300 rounded-md ">
        <div className="flex justify-center ">
          <button
            className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleAddMin}
          >
            +
          </button>
          Min
          <button
            className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleDecMin}
          >
            -
          </button>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            +
          </button>
          Sec
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClockApp;
