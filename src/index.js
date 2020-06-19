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
      {/*Comments looks like this in JSX*/}
      <DisplayAllWorkers items={items}></DisplayAllWorkers>
    </div>
  );
}

function DisplayAllWorkers({ items }) {
  return (
    <div>
      {items.map(x => (
        <DisplayWorker item={x} key={x.id}/>
      ))}
    </div>
  );
}

function DisplayWorker({ item }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{item.username}</td>
            <td>
              {item.start.getDate()}/{item.start.getMonth()}/
              {item.start.getFullYear()}
            </td>
            <td>
              {item.start.getHours()}:{item.start.getMinutes()}
            </td>
            <td>
              {item.end.getDate()}/{item.end.getMonth()}/
              {item.end.getFullYear()}
            </td>
            <td>
              {item.end.getHours()}:{item.end.getMinutes()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(
  <div className="room">
    <Container />
  </div>,
  document.getElementById("root")
);
