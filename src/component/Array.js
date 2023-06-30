import React, { useState } from "react";
import sound from "./assest/music.wav";
const ArrayComponent = () => {
  const [toggle, settoggle] = useState(true);
  const [color, setcolor] = useState("black");
  const [fruits, setfruits] = useState(["Apple", "Banana", "Orange", "Mango"]);
  const handleShuffle = () => {
    if (toggle) {
      setfruits(["Banana", "Oranges", "Apple", "Grapes"]);
    } else {
      setfruits(["Apple", "Banana", "Grapes", "Orange"]);
    }
    settoggle(!toggle);
  };
  const removeGrapes = () => {
    setfruits(["Apple", "Banana", "Orange"]);
    setcolor("Green");
  };
  const addGrapes = () => {
    setfruits(["Apple", "Banana", "Grapes", "Orange"]);
  };
  const play = () => {
    new Audio(sound).play();
  };
  const addfruits = () => {
    let upfruits = [...fruits];
    upfruits.push("Lichi");
    upfruits.push("Mango");
    setfruits(upfruits);
  };

  return (
    <>
      <p>This is the list of fruits</p>
      <ol style={{ backgroundcolor: color }}>
        <li>{fruits[0]} </li>
        <li> {fruits[1]}</li>
        <li> {fruits[2]}</li>
        <li> {fruits[3]}</li>
        <li> {fruits[5]}</li>
        <li> {fruits[6]}</li>
      </ol>
      <button
        onClick={() => {
          handleShuffle();
          play();
        }}
        type="button"
      >
        Shuffle Fruits
      </button>
      <button
        onClick={() => {
          removeGrapes();
          play();
        }}
        type="button"
      >
        {" "}
        Remove Grapes
      </button>
      <button
        onClick={() => {
          addGrapes();
          play();
        }}
        type="button"
      >
        Add Grapes
      </button>
      <button
        onClick={() => {
          addfruits();
          play();
        }}
        type="button"
      >
        Add Fruits
      </button>
    </>
  );
};
export default ArrayComponent;
