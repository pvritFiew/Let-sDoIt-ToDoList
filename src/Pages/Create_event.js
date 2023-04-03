import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Template from "../Component/Template/template";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Create_event() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      finish: 0,
    };
    try {
      const response = await axios.post("http://localhost:4000/api/events", newEvent);
      console.log(response.data);
      navigate.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Template>
      <div className="form-container">
        <h2>Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date</label>
            <br />
            <DatePicker
              className="form-control"
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDescription">Event Description</label>
            <textarea
              className="form-control"
              id="eventDescription"
              rows="3"
              placeholder="Enter event description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
        </form>
      </div>
    </Template>
  );
}

export default Create_event;
