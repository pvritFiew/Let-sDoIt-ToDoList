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

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
