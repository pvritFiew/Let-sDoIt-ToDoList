import React, { useState } from "react";
import "./box_of_event.css";
import { Trash } from "react-bootstrap-icons";

function Box_of_event(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleTick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="event-box">
      <div className="round">
        <input
          type="checkbox"
          id={`checkbox${props.id}`}
          checked={isChecked}
          onChange={handleTick}
        />
        <label htmlFor={`checkbox${props.id}`}></label>
        <Trash
          style={{ marginLeft: "185px", marginTop: "15px", position: "absolute", color: "red" }}
          size={25}
        />
      </div>

      <div className="box-of-event">
        <div className="name-event-box">
          <h3>{props.name}</h3>
        </div>
        <hr></hr>
        <div>
          <h5>{props.date}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Box_of_event);
