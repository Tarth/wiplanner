import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DataHandler } from "./datahandler.js";

function Container() {
  const [items, setItems] = useState(null);

  if (items === null) {
    DataHandler(setItems);
  }
  return (
    <div>
      <GetUserNamesFromJobs items={items}></GetUserNamesFromJobs>
      <DisplayWorker items={items}></DisplayWorker>
    </div>
  );
}

function DisplayWorker({ items }) {
  // Loop over the object and extract values from it
  for (let [key, value] of Object.entries(items[0])) {
    console.log(`${key}: ${value}`);
  }
  return <p>Display Worker</p>;
}

function GetUserNamesFromJobs({ items }) {
  let usernames = [];
  console.log(items[0]);
  for (let i = 0; i < items.length; i++) {
    let temp = items[i].username;
    usernames.push(temp);
  }

  if (items === null) {
    return <p>"Data has not loaded yet"</p>;
  } else {
    return <p>{usernames}</p>;
  }
}

ReactDOM.render(
  <div className="room">
    <Container />
  </div>,
  document.getElementById("root")
);
