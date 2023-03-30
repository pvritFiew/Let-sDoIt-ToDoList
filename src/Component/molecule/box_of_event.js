import React from "react";
import './box_of_event.css'
import { Trash } from 'react-bootstrap-icons';

function BoxOfEvent(props){

    const handleTrashClick = () => {
        props.onRemove(props.id);
    }

    return(
        <div className="event-box">
            <div className="round">
                {/* Check status did it or don't do yet */}
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox"></label>
                <Trash 
                    style={{marginLeft:'185px', marginTop:'15px', position:'absolute', color:'red'}}
                    size={25}
                    onClick={handleTrashClick} 
                />
            </div>

            <div className="box-of-event">
                <div className="name-event-box">
                    <h3>{props.name}</h3>
                </div>
                <hr></hr>
                <div>
                    <h5>{props.date}</h5>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>    
    )
}

export default BoxOfEvent;
