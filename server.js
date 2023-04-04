const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let data = require('./public/data.json');

app.get('/api/events', (req, res) => {
  res.json(data);
});

app.post('/api/events', (req, res) => {
  const newEvent = req.body;
  newEvent.id = data.length + 1;
  newEvent.finish = 0;
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US');
  const existingDate = data.find((item) => item.days === formattedDate);
  if (existingDate) {
    existingDate.events.push(newEvent);
  } else {
    data.push({ days: formattedDate, events: [newEvent] });
  }
  res.json(newEvent);
});

app.put('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const updatedEvent = req.body;
  const eventIndex = data.findIndex((item) => item.id === eventId);
  if (eventIndex >= 0) {
    data[eventIndex] = { ...data[eventIndex], ...updatedEvent };
    res.json(data[eventIndex]);
  } else {
    res.status(404).json({ message: `Event with id ${eventId} not found.` });
  }
});

app.get('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = data
    .map((day) => day.events)
    .flat()
    .find((event) => event.id === eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: `Event with id ${eventId} not found.` });
  }
});

app.delete('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const eventIndex = data.findIndex((item) => item.events.some((event) => event.id === eventId));

  if (eventIndex >= 0) {
    const event = data[eventIndex].events.find((event) => event.id === eventId);
    data[eventIndex].events = data[eventIndex].events.filter((event) => event.id !== eventId);
    res.json(event);
  } else {
    res.status(404).json({ message: `Event with id ${eventId} not found.` });
  }
});



const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
