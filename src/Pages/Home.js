import React, { useState, useEffect } from 'react';
import Template from '../Component/Template/template';
import All_event_show from '../Component/organism/all_event_show';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios('../data.json');
        setData(response.data);
      };
  
      fetchData();
    }, []);
  
    return (
      <Template>
        {data.map((item, index) => (
          <All_event_show data={data[index]} />
        ))}
      </Template>
    );
  }
  
  export default Home;