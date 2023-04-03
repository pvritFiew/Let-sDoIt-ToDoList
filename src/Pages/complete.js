import React, { useState, useEffect } from 'react';
import Template from '../Component/Template/template';
import axios from 'axios';
import CompleteShow from '../Component/organism/comp_show';

function Complete() {
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
      <div className='bg-text-navi'>
        <h2>Completed</h2>
      </div>
      {data.map((item, index) => (
        <CompleteShow key={index} data={item} condition={1}/>
      ))}
    </Template>
  );
}

export default Complete;