import './App.css';
import React, { useState, useEffect } from 'react';
import Template from './Component/Template/template';
import Box_of_event from './Component/molecule/box_of_event';

function App() {

  const [events, setEvents] = useState([
    {
        id: 1,
        name: "Event 1",
        date: "01/01/2022",
        description: "Description 1"
    },
    {
        id: 2,
        name: "Event 2",
        date: "02/02/2022",
        description: "Description 2"
    }
]);

const handleRemove = (id) => {
    setEvents(events.filter(event => event.id !== id));
}

  return (
      <Template>
        {events.map(event => (
                <Box_of_event 
                    key={event.id} 
                    id={event.id} 
                    name={event.name} 
                    date={event.date} 
                    description={event.description} 
                    onRemove={handleRemove}
                />
            ))}
      </Template>
  );
}

export default App;
