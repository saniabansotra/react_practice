import React, { useState } from "react";
import sound from "./assest/music.wav";
const ArrayComponent = () => {
  const [toggle, settoggle] = useState(true);
  const [color, setcolor] = useState("yellow");
  const [color1, setcolor1] = useState("pink");
  const [veges, setveges] = useState([
    "Potato",
    "Tomato",
    "Ladyfinger",
    "Cabbage",
    "Capsicum",
  ]);
  const handleShuffle = () => {
    if (toggle) {
      setveges(["Tomato", "Cabbage", "Ladyfinger", "Capsicum", "Potato"]);
    } else {
      setveges(["Potato", "Tomato", "Ladyfinger", "Cabbage", "Capsicum"]);
    }
    settoggle(!toggle);
    setcolor("red");
  };
  const removeCapsicum = () => {
    setveges(["Potato", "Tomato", "Ladyfinger", "Cabbage"]);
    setcolor("pink");
  };
  const addCapsicum = () => {
    setveges(["Potato", "Tomato", "Ladyfinger", "Cabbage", "Capsicum"]);
    setcolor("yellow");
  };
  const addpotato = () => {
    setveges(["Potato", "Tomato", "Ladyfinger", "Cabbage", "Capsicum"]);
    setcolor("yellow");
  };
  const removepotato = () => {
    setveges(["Tomato", "Ladyfinger", "Cabbage", "Capsicum"]);
    setcolor("yellow");
  };
  const play = () => {
    new Audio(sound).play();
  };
  const addveges = () => {
    let upveges = [...veges];
    upveges.push("BitterGuard");
    setveges(upveges);
    setcolor("blue");
  };

  return (
    <>
      <div style={{ backgroundColor: "cyan" }}>
        <p style={{ backgroundColor: color1 }}>Here are some Vegetables</p>
        <ol style={{ backgroundColor: color }}>
          {veges.map((v) => {
            return (
              <>
                <li>{v}</li>
              </>
            );
          })}
        </ol>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            handleShuffle();
            play();
          }}
          type="button"
        >
          Shuffle Veges
        </button>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            removeCapsicum();
            play();
          }}
          type="button"
        >
          {" "}
          Remove Capsicum
        </button>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            addCapsicum();
            play();
          }}
          type="button"
        >
          Add Capsicum
        </button>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            addveges();
            play();
          }}
          type="button"
        >
          Add Veges
        </button>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            addpotato();
            play();
          }}
          type="button"
        >
          Add potato
        </button>
        <button
          style={{ backgroundColor: "brown" }}
          onClick={() => {
            removepotato();
            play();
          }}
          type="button"
        >
          remove potato
        </button>
      </div>
    </>
  );
};
export default ArrayComponent;
