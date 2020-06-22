import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DataHandler } from "./datahandler.js";
import { format, differenceInDays } from "date-fns";

function Container() {
  const [items, setItems] = useState(null);

  if (items === null) {
    DataHandler(setItems);
  }
  return (
    <div className="calendar-grid">
      {/*Comments looks like this in JSX*/}
      <DisplayAllWorkers items={items}></DisplayAllWorkers>
    </div>
  );
}

function DisplayAllWorkers({ items }) {
  return (
    <>
      <span>Navn</span>
      <span>Mandag</span>
      <span>Tirsdag</span>
      <span>Onsdag</span>
      <span>Torsdag</span>
      <span>Fredag</span>
      <span>Lørdag</span>
      <span>Søndag</span>
      {items.map((x) => (
        <DisplayWorker item={x} key={x.id} />
      ))}
    </>
  );
}
/* 
function DisplayWorker({ item }) {
  console.log(differenceInDays(item.end, item.start));

  return (
    <>
      <span>{item.username}</span>
      <span>
        {format(item.start, "dd")}/{format(item.start, "MM")}/
        {format(item.start, "yyyy")}
      </span>
      <span>
        {format(item.start, "HH")}:{format(item.start, "mm")}
      </span>
      <span>
        {format(item.end, "dd")}/{format(item.end, "MM")}/
        {format(item.end, "yyyy")}
      </span>
      <span>
        {format(item.end, "HH")}:{format(item.end, "mm")}
      </span>
    </>
  );
}
*/
function DisplayWorker({ item }) {
  console.log(differenceInDays(item.end, item.start));

  return (
    <>
      <span>{item.username}</span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
}

ReactDOM.render(
  <div className="room">
    <Container />
  </div>,
  document.getElementById("root")
);
