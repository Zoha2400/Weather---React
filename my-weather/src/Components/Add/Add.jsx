import React from "react";
import "./Add.css";

const Add = () => {
  return (
    <div className="Add">
      <div className="input">
        <input id="input" placeholder="Type something.." />
        <i class="bi bi-search"></i>
      </div>
      <div className="addLocation">
        <div className="plus">+</div>
        <section>
          <h1>Add location</h1>
          <p>Did you know you can add favorite locations?</p>
        </section>
      </div>
    </div>
  );
};

export default Add;
