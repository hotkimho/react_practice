import { useState, useEffect, useReducer } from "react";
import SassComponent from "./SassComponent";
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {

  return (
    <div>
      <SassComponent />
    </div >
  );
}

export default App;
