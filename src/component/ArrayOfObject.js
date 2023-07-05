import React, { useState } from "react";
import sound from "./assest/buttonclick.wav";

const ArrayOfObject = () => {
  const [color, setcolor] = useState("yellow");
  const [color1, setcolor1] = useState("brown");
  const [student, setstudent] = useState([
    {
      name: "sania",
      branch: "cse",
      rollno: "2021021088",
      package: "10LPA",
      address: "Gorakhpur",
    },
    {
      name: "sanii",
      branch: "ece",
      rollno: "2021021020",
      package: "12LPA",
      address: "Kanpur",
    },
    {
      name: "nia",
      branch: "ee",
      rollno: "2021021029",
      package: "9LPA",
      address: "Lucknow",
    },
    {
      name: "sanvi",
      branch: "ece",
      rollno: "2021021066",
      package: "18LPA",
      address: "Varanasi",
    },
    {
      name: "janvi",
      branch: "cse",
      rollno: "2021021002",
      package: "20LPA",
      address: "Gorakhpur",
    },
  ]);
  const addStudent = () => {
    let upstudent = [...student];
    upstudent.push({
      name: "Princi",
      branch: "EE",
      rollno: "2021021008",
      package: "23LPA",
      address: "Meerut",
    });
    upstudent.push({
      name: "Satachi",
      branch: "ECE",
      rollno: "20210210345",
      package: "15LPA",
      address: "Praygraj",
    });
    setstudent(upstudent);
    setcolor("cyan");
    setcolor1("pink");
  };
  const removeStudent = () => {
    const upstudent = [...student];
    upstudent.pop();
    setstudent(upstudent);
    setcolor("pink");
    setcolor1("cyan");
  };
  const play = () => {
    new Audio(sound).play();
  };
  const deleteman = () => {
    let oldStudents = [...student];
    let newStudnets = oldStudents.filter((v, i) => v.name !== "sanii");
    setstudent(newStudnets);
  };

  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <h1
          style={{
            color: "black",
            backgroundColor: color,
            padding: "2%",
          }}
        >
          LIST OF STUDENTS
        </h1>
        {student.map((v, i) => {
          return (
            <>
              <ul style={{ color: "black", backgroundColor: color1 }}>
                <li>Name: {v.name}</li>
                <li>Branch: {v.branch}</li>
                <li>Rollno: {v.rollno}</li>
                <li>Address: {v.address}</li>
                <li>Package: {v.package}</li>
              </ul>
            </>
          );
        })}
        <button
          style={{ color: "black", backgroundColor: "Yellow" }}
          onClick={() => {
            addStudent();
            play();
          }}
        >
          Add Student
        </button>
        <button
          style={{ color: "black", backgroundColor: "Yellow" }}
          onClick={() => {
            removeStudent();
            play();
          }}
        >
          Remove Student
        </button>
      </div>
      <button
        style={{ color: "black", backgroundColor: "Yellow" }}
        onClick={() => {
          deleteman();
          play();
        }}
      >
        delete sanii
      </button>
    </>
  );
};
export default ArrayOfObject;
