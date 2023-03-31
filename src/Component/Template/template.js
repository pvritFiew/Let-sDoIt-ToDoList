import React, { useState, useEffect } from 'react';
import './template.css'

function Template(props) {

  const [backgroundColor, setBackgroundColor] = useState('rgb(229, 229, 229)');
  const [Color, setColor] = useState('black');
  const [intervalId, setIntervalId] = useState(null);

  function handleBackgroundColorChange(event) {
    const value = event.target.value;
    if (value === 'white') {
      setBackgroundColor('rgb(229, 229, 229)');//Theme Light mode
      setColor('black');
      clearInterval(intervalId); //reset Theme color
    }
    else if (value === 'gray') {
      setBackgroundColor('rgb(65, 65, 65)');//Theme Dark mode
      setColor('white');
      clearInterval(intervalId);//reset Theme color
    }
    else if (value === 'random') {//This condition for change color every 1 second
      setColor('black');
      clearInterval(intervalId);//reset Theme color
      const id = setInterval(() => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setBackgroundColor(randomColor);
      }, 1000);//use setInterval for use timing to do something
      setIntervalId(id);//use useState for check condition value is random
    }
  }

  return (
    <div className='template' >
        <div className='header' style={{ backgroundColor,color:Color }}>
            <title>Let's Do It</title>
            <h2>Let's Do It : To Do List</h2>
            <div className='select_mode'>

              <label>
                Light Mode
                <input type="radio" name="radio" className='bg_mode'value="white" checked={backgroundColor === 'rgb(229, 229, 229)'} onChange={handleBackgroundColorChange} />
              </label>

              <label>
                Dark Mode
                <input type="radio" name="radio" className='bg_mode'value="gray" checked={backgroundColor === 'rgb(65, 65, 65)'} onChange={handleBackgroundColorChange}/>
              </label>

              <label>
                Random
                <input type="radio" name="radio" className='bg_mode'value="random" checked={backgroundColor !== 'rgb(229, 229, 229)' && backgroundColor !== 'rgb(65, 65, 65)'} onChange={handleBackgroundColorChange}/>
              </label>

            </div>
            
        </div>
      <div className='main'>
        <ul className='navigate' style={{ backgroundColor}}>
          <li className='nav_item' >
            <a href='#'style={{color:Color }}>Today</a>
          </li>
          <hr />
          <li className='nav_item'>
            <a href='#'style={{color:Color }}>Calendar</a>
          </li>
          <hr />
          <li className='nav_item'>
            <a href='#'style={{color:Color }}>Create Event</a>
          </li>
          <hr />
          <li className='nav_item'>
            <a href='#'style={{color:Color }}>Uncomplete</a>
          </li>
          <hr />
          <li className='nav_item'>
            <a href='#'style={{color:Color }}>Completed</a>   
          </li>
          <hr />
        </ul>
        

      </div>
      <div className='content'>
          {props.children}
        </div>
    </div>
  );
}

export default Template;
