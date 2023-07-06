import React, { useState } from "react";
import sound from "./assest/buttonclick.wav";
const ArrayOfObject = () => {
  const [color, setcolor] = useState("blue");
  const [employee, setemployee] = useState([
    {
      name: "Sania",
      age: "20",
      address: "jammu",
      salary: "50000",
    },
    {
      name: "Janvi",
      age: "21",
      address: "kanpur",
      salary: "40000",
    },
    {
      name: "Saanvi",
      age: "19",
      address: "Varanasi",
      salary: "60000",
    },
    {
      name: "Nanika",
      age: "23",
      address: "jammu",
      salary: "55000",
    },
    {
      name: "Ankit",
      age: "24",
      address: "Lucknow",
      salary: "65000",
    },
  ]);
  const deleteemployee = (c) => {
    let oldemployee = [...employee];
    let newemployee = oldemployee.filter((v, i) => v.name !== c.name);
    setemployee(newemployee);
  };
  const updateemployee = (c) => {
    let oldemployee = [...employee];

    // if (oldemployee.name === "Sania") {
    //   oldemployee.address = "kashmir";
    // }

    for (let i = 0; i < oldemployee.length; i++) {
      if (oldemployee[i] === c && oldemployee[i].name === "Sania") {
        oldemployee[i].address = "Gorakhpur";
      }
      if (oldemployee[i] === c && oldemployee[i].name === "Janvi") {
        oldemployee[i].address = "Kashmir";
        oldemployee[i].salary = "45000";
      }
      if (oldemployee[i] === c && oldemployee[i].name === "Saanvi") {
        oldemployee[i].age = "23";
        oldemployee[i].address = "Kanpur";
      }
      if (oldemployee[i] === c && oldemployee[i].name === "Nanika") {
        oldemployee[i].salary = "56000";
        oldemployee[i].address = "Lucknow";
      }
      if (oldemployee[i] === c && oldemployee[i].name === "Ankit") {
        oldemployee[i].name = "Ankit Bansotra";
        oldemployee[i].address = "Kashmir";
      }
    }
    setemployee(oldemployee);
  };
  const play = () => {
    new Audio(sound).play();
  };
  return (
    <>
      <div style={{ backgroundColor: "Pink" }}>
        <h1>
          <u>Here is the data of employees</u>
        </h1>
        {employee.map((v, i) => {
          return (
            <div key={i}>
              <ul>
                <li>Name: {v.name}</li>
                <li>Age: {v.age}</li>
                <li>Address: {v.address}</li>
                <li>Salary: {v.salary}</li>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                  }}
                  onClick={() => {
                    deleteemployee(v);
                    play();
                  }}
                >
                  Delete Me
                </button>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    margin: "2%",
                  }}
                  onClick={() => {
                    updateemployee(v);
                    play();
                  }}
                >
                  Update Me
                </button>
              </ul>
              ;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArrayOfObject;
