import { useState } from 'react';

import Form from './Form';

function Artist(props) {
  
  const [formVisible, setFormVisible] = useState(false);

  function toggleForm() {
    setFormVisible(!formVisible);
  }

  function handleUpdate(event, artist) {
    toggleForm();
    props.handleUpdate(event, artist);
  }
  

    return (
      <>
      {
        formVisible ?
        <>
        <Form artist={props.artist} handleSubmit={handleUpdate} />
        <button onClick={toggleForm}>Cancel</button>
        </>
        : <div className="artist">
            <h3>{props.artist.name}</h3>
            <img src={props.artist.img_url} alt={props.artist.name}/>
            {props.artist.songs && props.artist.songs.map (song => 
            <p>{song.name}</p>
            )}
            <button onClick={() => props.handleDelete(props.artist)}>X</button>
            <button onClick={toggleForm}>Edit This Artist</button>
       </div>
      }
       </>
    );
}

export default Artist;