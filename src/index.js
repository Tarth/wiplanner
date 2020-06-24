import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DataHandler } from "./datahandler.js";
import { format } from "date-fns";

const liste = [["1", "2", "3", "4", "5"], [("4", "5", "6")], ["7", "8", "9"]];

function Container() {
  const [items, setItems] = useState(null);

  if (items === null) {
    DataHandler(setItems);
  }
  return (
    <div>
      {/*Comments looks like this in JSX*/}
      <DisplayAllWorkers items={items}></DisplayAllWorkers>
      {/*<DisplayWorker item={items}></DisplayWorker>*/}
    </div>
  );
}

function DisplayAllWorkers({ items }) {
  return (
    <>
      {items.map((x) => (
        <DisplayWorker item={x} key={x.id} />
      ))}
    </>
  );
}

function DisplayWorker({ item }) {
  console.log(item);

  const [width, setWidth] = useState(500);

  return (
    <div className="workerjobs" style={{ width: width }}>
      {liste[0].map((x) => (
        <div className="workerjob">{x}</div>
      ))}
    </div>
  );
}
ReactDOM.render(
  <div className="room">
    <Container />
  </div>,
  document.getElementById("root")
);
