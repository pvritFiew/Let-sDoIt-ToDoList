import React from "react";
import Box_of_event from "../molecule/box_of_event";
import "./organism.css";

function CompleteShow(props) {
  const { data } = props;
  const filteredEvents = data.events.filter((event) => event.finish === props.condition);

  if (filteredEvents.length === 0) {
    return null; 
  }

  return (
    <div className="box-date-show-main">
      <div className="date-show-main">
      <h2>{data.days}</h2>
      </div>
      <div className="event-box-container">
      {filteredEvents.map((event) => (
        <Box_of_event
        id={event.id}
        name={event.name}
        date={event.date}
        description={event.description}
        finish={event.finish}
        />
      ))}
      </div>
    </div>
  );
}

export default CompleteShow;
