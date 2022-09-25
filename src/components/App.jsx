import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function App(){

  const [listOfNotes, addToList] = useState([]);

  const [input,setInput] = useState(
    {
      title:"", 
      content:""
    }
    );

  function updateText(event){
    const {value, name} = event.target;
    setInput(prev => {
      
      return {
      ...prev, 
      [name]:value
      }
    });
  }

  function addNote(){
    addToList(prevList => [...prevList, input]);
    setInput({title:"",content:""});
  }

  function removeNote(id){
    addToList(prevList => prevList.filter((value,index)=> index !== id));
  }

    return (
      <div>
        <Header 
        className="heading" 
        />

        <div className="add-text">
          <input 
          type="text"
          name="title"
          onChange={updateText}
          value={input.title}
          placeholder="Title"
          />
          <input
          name="content"
          onChange={updateText}
          value={input.content}
          placeholder="Take a note..."
          />
          <Fab 
          onClick={addNote}
          >
          <AddIcon />
          </Fab>
        </div>

        <div className="note-container">
          {
            listOfNotes.map((element,index)=> 
            <Note
            key={index} 
            id={index}
            title={element.title} 
            content={element.content}
            remove={removeNote}
            />)
          }
        </div>
        <Footer />
    </div>
    );
}
  
export default App;