import React from 'react';

function Note (props){
    return <div className="note"> 
                <h3> {props.title} </h3>
                <p> {props.content} </p>
                <button 
                onClick={_=>props.remove(props.id)}
                >Delete</button>
            </div>
}

export default Note;