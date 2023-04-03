import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EventForm(){

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
      const eventData = response.data;
      const newEvents = {
        days: eventData.date,
        events: [{
          name: eventData.name,
          date: eventData.date,
          description: eventData.description,
          finish: eventData.finish,
          id: eventData.id
        }]
      }
      const allEventsResponse = await axios.post("http://localhost:4000/api/allevents", newEvents);
      console.log(allEventsResponse.data);
      navigate.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  
    return(
        <div className="form-container">
        <h2>Create New Event Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <div>
            <input
              type="text"
              className="form-control"
              id="eventName"
              placeholder="Event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="eventDate">Event Date:</label>
            <div>
            <DatePicker
              className="form-control"
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              dateFormat="dd/MM/yyyy"
              
            />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="eventDescription">Event Description:</label>
            <div>
            <textarea
              className="form-control"
              id="eventDescription"
              rows="3"
              placeholder="Event description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
        </form>
        
      </div>
    );
}

export default EventForm;