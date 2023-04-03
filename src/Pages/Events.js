import React, { useState, useEffect } from 'react';
import Template from '../Component/Template/template';
import All_event_show from '../Component/organism/all_event_show';
import axios from 'axios';

function Events() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:4000/api/events");
        setData(response.data);
      };
  
      fetchData();
    }, []);

    const handleNewEvent = (newEvent) => {
      setData((prevEvents) => [...prevEvents, newEvent]);
    };
  
    return (
      <Template>
        {data.map((item, index) => (
          <All_event_show key={index} data={item} />
        ))}
      </Template>
    );
  }
  
  export default Events;