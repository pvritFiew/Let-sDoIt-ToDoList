import React, { useState, useEffect} from 'react';
import './template.css'
import {Link } from 'react-router-dom';
import {BsFillBrightnessHighFill , BsFillCloudMoonFill}from "react-icons/bs";
import {FaRandom,FaHome} from "react-icons/fa"
import { Display } from 'react-bootstrap-icons';

function Template(props) {

  const [backgroundColor, setBackgroundColor] = useState(
    localStorage.getItem('backgroundColor') || 'rgb(240, 240, 240)'
  );
  const [backgroundContent, setBackgroundContent] = useState(
    localStorage.getItem('backgroundContent') || 'white'
  );
  const [Color, setColor] = useState(
    localStorage.getItem('Color') || 'black'
  );
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Store values in local storage when they change
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('backgroundContent', backgroundContent);
    localStorage.setItem('Color', Color);
  }, [backgroundColor, backgroundContent, Color]);

  function handleBackgroundColorChange(event) {
    const value = event.target.value;
    if (value === 'white') {
      setBackgroundColor('rgb(240, 240, 240)');
      setBackgroundContent('white');
      setColor('black');
      clearInterval(intervalId); //reset Theme color
    }
    else if (value === 'gray') {
      setBackgroundColor('rgb(34, 34, 34)');
      setBackgroundContent('rgb(54, 54, 54)');
      setColor('white');
      clearInterval(intervalId); //reset Theme color
    }
    else if (value === 'random') {
      setColor('black');
      const id = setInterval(() => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        setBackgroundColor(randomColor);
        setBackgroundContent(randomColor);
      }, 1000);
      setIntervalId(id);
    }
  }

  return (
    <div className='template' >
        <div className='header' style={{ backgroundColor,color:Color }}>
            <title>Let's Do It</title>
            <h2>Let's Do It : To Do List</h2>
            <div className='select_mode'>

              <label title="Light Mode">
                <BsFillBrightnessHighFill style={{color:Color}} />
                <input type="radio" name="radio" className='bg_mode'value="white" checked={backgroundColor === 'rgb(240, 240, 240)'} onChange={handleBackgroundColorChange} />
              </label>

              <label title="Night Mode">
                < BsFillCloudMoonFill style={{color:Color}}/>
                <input type="radio" name="radio" className='bg_mode'value="gray" checked={backgroundColor === 'rgb(34, 34, 34)'} onChange={handleBackgroundColorChange}/>
              </label>

              <label title="Random">
                <FaRandom style={{color:Color}}/>
                <input type="radio" name="radio" className='bg_mode'value="random" checked={backgroundColor !== 'rgb(240, 240, 240)' && backgroundColor !== 'rgb(34, 34, 34)'} onChange={handleBackgroundColorChange}/>
              </label>

            </div>
            
        </div>
      <div className='main'>
      <ul className='navigate' style={{ backgroundColor}}>
  <li className='nav_item' >
    <Link to="/"style={{color:Color}}><FaHome style={{color:Color}}/><a style={{color:Color}}>Home</a></Link>
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
