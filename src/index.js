import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import { useState } from "react";
import StarRating from "./StarRating";
function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color="pink" onSetRating={setRating} />
      <p>{rating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Great", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" />
    <StarRating maxRating={20} color="blue" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
