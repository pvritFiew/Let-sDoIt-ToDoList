import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EventUpdateForm() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/events/${eventId}`);
        const eventData = response.data;
        setEventName(eventData.name);
        setEventDescription(eventData.description);
        setEventDate(new Date(eventData.date));
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedEvent = {
      name: eventName,
      description: eventDescription,
      date: eventDate.toISOString(),
      finish: 0,
    };
    try {
      const response = await axios.put(`http://localhost:4000/api/events/${eventId}`, updatedEvent);
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="form-container">
      <h2>Update Event Form</h2>
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
          Update Event
        </button>
      </form>
    </div>
  );
}

export default EventUpdateForm;
