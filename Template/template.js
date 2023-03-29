import React, { useState, useEffect } from 'react';

function template (){
 return(
    <div>
        <div className='header'>
            <title>Let's Do It : To Do List</title>
        </div>
        <div className='main'>
            <ul className='navigate'>
                <li>Home</li>
                <li>Calendar</li>
                <li>Create Event</li>
                <li>Uncomplete</li>
                <li>Complated</li>
            </ul>

        </div>
    </div>
 )
}