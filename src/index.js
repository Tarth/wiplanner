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
      {/*<GetUserNamesFromJobs items={items}></GetUserNamesFromJobs>*/}
      <DisplayAllWorkers items={items}></DisplayAllWorkers>
    </div>
  );
}

function DisplayAllWorkers({ items }) {
  console.log(items.length);
  for (let i = 0; i < items.length; i++) {
    return (
      <div>
        <DisplayWorker items={items} workerId={i}></DisplayWorker>
      </div>
    );
  }
}

function DisplayWorker({ items, workerId }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{items[workerId].username}</td>
            <td>
              {items[workerId].start.getDate()}/
              {items[workerId].start.getMonth()}/
              {items[workerId].start.getFullYear()}
            </td>
            <td>
              {items[workerId].start.getHours()}:
              {items[workerId].start.getMinutes()}
            </td>
            <td>
              {items[workerId].end.getDate()}/{items[workerId].end.getMonth()}/
              {items[workerId].end.getFullYear()}
            </td>
            <td>
              {items[workerId].end.getHours()}:
              {items[workerId].end.getMinutes()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
/*
function GetUserNamesFromJobs({ items }) {
  let usernames = [];

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
*/

ReactDOM.render(
  <div className="room">
    <Container />
  </div>,
  document.getElementById("root")
);
