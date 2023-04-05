import React, { useState, useEffect } from "react";
import "./box_of_event.css";
import {Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function Box_of_event(props) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (props.finish === 1) {
      setIsChecked(true);
    }
  }, [props.finish]);

  const handleTick = () => {
    const newValue = isChecked ? 0 : 1;
    setIsChecked(!isChecked);
  
    axios
      .put(`http://localhost:4000/api/events/${props.id}`, {
        finish: newValue,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const handleDelete = () => {
    props.onDelete(props.id);
    axios
      .delete(`http://localhost:4000/api/events/${props.id}`)
      .then(() => {
        props.onDelete(props.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="event-box">
      <div className="round">
        {/* Check status did it or don't do yet */}
        <input
          type="checkbox"
          id={`checkbox${props.id}`}
          checked={isChecked}
          onChange={handleTick}
        />
        <label htmlFor={`checkbox${props.id}`}></label>
        <Trash
          style={{
            marginLeft: "185px",
            marginTop: "15px",
            position: "absolute",
            color: "red",
          }}
          size={25}
          onClick={handleDelete}
        />
      </div>
      <Link to={`/edit/${props.id}`} style={{ color: "black" }}>
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
      </Link>
    </div>
  );
}
export default React.memo(Box_of_event);
