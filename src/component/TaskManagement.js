import React, { useState } from "react";
// import AddBoxIcon from "@mui/icons-material/AddBox";

const Task = () => {
  const [newtask, settask] = useState([]);
  const [newtasktitle, setnewtasktitle] = useState("");
  const [newtaskdescription, setnewtaskdescription] = useState("");
  const [newtaskduedate, setnewtaskduedate] = useState([new Date()]);
  const createTask = () => {
    const oldtask = [...newtask];
    const Uptask = {
      taskname: newtasktitle,
      taskdescription: newtaskdescription,
      taskdate: newtaskduedate,
      taskstatus: "To Do",
    };
    oldtask.push(Uptask);
    settask(oldtask);
  };
  const updatedtask = (c) => {
    const oldtask = [...newtask];
    oldtask[c].taskstatus = "In Progress";

    settask(oldtask);
  };
  const deletetask = (c) => {
    let oldtask = [...newtask];
    const uptask = oldtask.filter((v, i) => i !== c);
    settask(uptask);
  };

  return (
    <>
      <div style={{ backgroundColor: "lightgoldenrodyellow" }}>
        <h1>Task Management </h1>
        <div className="mt-2;">
          <label>Task Title </label>
          <input
            value={newtasktitle}
            onChange={(e) => setnewtasktitle(e.target.value)}
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Task Description</label>
          <textarea
            value={newtaskdescription}
            onChange={(e) => setnewtaskdescription(e.target.value)}
            type="text"
            placeholder="Enter Description"
          />
        </div>
        <br />
        <div className="mt-2;">
          <label>Task Due Date</label>
          <input
            value={newtaskduedate}
            onChange={(e) => setnewtaskduedate(e.target.value)}
            type="date"
          />
        </div>
        <br />
        <button
          class="createtask"
          style={{ backgroundColor: "lightpink", padding: "1%" }}
          onClick={() => createTask()}
        >
          click me
          {/* <AddBoxIcon /> */}
        </button>
      </div>
      {newtask.map((v, i) => {
        return (
          <div key={i}>
            <h3> New Task</h3>
            <ul>
              <li>Title: {v.taskname}</li>
              <li>Description:{v.taskdescription}</li>
              <li>Date:{v.taskdate}</li>
              <li>Status:{v.taskstatus}</li>
            </ul>
            <button onClick={() => deletetask(i)} type="button">
              Delete
            </button>
            <button onClick={() => updatedtask(i)} type="button">
              Start Task
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Task;
