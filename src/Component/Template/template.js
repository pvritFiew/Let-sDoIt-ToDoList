import React, { useState} from 'react';
import './template.css'
import {Link } from 'react-router-dom';

function Template(props) {

  const [backgroundColor, setBackgroundColor] = useState('rgb(240, 240, 240)');
  const [backgroundContent, setBackgroundContent] = useState('white');
  const [Color, setColor] = useState('black');
  const [intervalId, setIntervalId] = useState(null);

  function handleBackgroundColorChange(event) {
    const value = event.target.value;
    if (value === 'white') {
      setBackgroundColor('rgb(240, 240, 240)');//Theme Light mode
      setBackgroundContent('white');
      setColor('black');
      clearInterval(intervalId); //reset Theme color
    }
    else if (value === 'gray') {
      setBackgroundColor('rgb(34, 34, 34)');//Theme Dark mode
      setBackgroundContent('rgb(54, 54, 54)');
      setColor('white');
      clearInterval(intervalId);//reset Theme color
    }
    else if (value === 'random') {//This condition for change color every 1 second
      setColor('black');
      clearInterval(intervalId);//reset Theme color
      const id = setInterval(() => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setBackgroundColor(randomColor);
        setBackgroundContent(randomColor);
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
                <input type="radio" name="radio" className='bg_mode'value="white" checked={backgroundColor === 'rgb(240, 240, 240)'} onChange={handleBackgroundColorChange} />
              </label>

              <label>
                Dark Mode
                <input type="radio" name="radio" className='bg_mode'value="gray" checked={backgroundColor === 'rgb(34, 34, 34)'} onChange={handleBackgroundColorChange}/>
              </label>

              <label>
                Random
                <input type="radio" name="radio" className='bg_mode'value="random" checked={backgroundColor !== 'rgb(240, 240, 240)' && backgroundColor !== 'rgb(34, 34, 34)'} onChange={handleBackgroundColorChange}/>
              </label>

            </div>
            
        </div>
      <div className='main'>
      <ul className='navigate' style={{ backgroundColor}}>
  <li className='nav_item' >
    <Link to="/"style={{color:Color}}>Today</Link>
  </li>
  <hr />
  <li className='nav_item'>
    <Link to="/create_event"style={{color:Color}}>Create Event</Link>
  </li>
  <hr />
  <li className='nav_item'>
    <Link to="/complete"style={{color:Color}}>Complete</Link>
  </li>
  <hr />
  <li className='nav_item'>
    <Link to="/uncomplete"style={{color:Color}}>Uncomplete</Link>  
  </li>
  <hr />
</ul>

        

      </div>
      <div className='content' style={{backgroundColor:backgroundContent}}>
        <div className='content-box'>
          {props.children}
        </div>
          
        </div>
    </div>
  );
}

export default Template;
