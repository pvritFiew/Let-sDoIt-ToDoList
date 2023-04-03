import React, { useState, useEffect } from 'react';
import Template from '../Component/Template/template';
import AllEventShow from '../Component/organism/all_event_show';
import axios from 'axios';

function Events() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/events");
      setData(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <Template>
      {data.map((item, index) => (
        <AllEventShow key={index} data={item} />
      ))}
    </Template>
  );
}

export default Events;
