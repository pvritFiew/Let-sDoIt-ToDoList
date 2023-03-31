import React, { useState, useEffect } from "react";
import axios from "axios";
import BoxOfEvent from "../molecule/box_of_event";
import './organism.css';

function AllEventShow(props) {

  return (
    <div className="box-date-show-main">
      <div className="date-show-main">
        <h2>{props.date}</h2>
      </div>
        <BoxOfEvent
        key={1}
        id={1}
        name="name"
        date="02/02/2023"
        description="description"
        />
    </div>
  );
}

export default AllEventShow;
