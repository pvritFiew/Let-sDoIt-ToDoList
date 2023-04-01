import React, { useState, useEffect } from "react";
import axios from "axios";
import Box_of_event from "../molecule/box_of_event";
import "./organism.css";

function AllEventShow(props) {
  const [events, setEvents] = useState(props.data.events);

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="box-date-show-main">
      <div className="date-show-main">
        <h2>{props.data.days}</h2>
      </div>
      <div className="event-box-container">
        {events.map((event) => (
          <Box_of_event
            key={event.id}
            id={event.id}
            name={event.name}
            date={event.date}
            description={event.description}
            finish={event.finish}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AllEventShow;
