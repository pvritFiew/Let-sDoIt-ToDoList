import './App.css';
import React, { useState, useEffect } from 'react';
import Template from './Component/Template/template';
import All_event_show from './Component/organism/all_event_show'
import axios from "axios";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datas = await axios("./data.json");
      setData(datas);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
      <Template>
        <All_event_show date="01/01/2023"/>
      </Template>
  );
}

export default App;
