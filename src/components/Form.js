import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      name:'',
      img_url:'',
    });

    useEffect(() => {
      if(props.artist) {
        setFormState({
          name: props.artist.name,
          img_url: props.artist.img_url,
          

          id: props.artist.id
        })
      }
    }, [props.artist]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(props.artist) formState.id = props.artist.id
    props.handleSubmit(event, formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="name"
          placeholder="Artist Name"
          type="text"
          value={formState.name}
          id="name"
         />
         <Input
           handleChange={handleChange}
           name="img_url"
           placeholder="Artist Img Url"
           type="text"
           value={formState.img_url}
           id="img_url"
        />
        <Input
           handleChange={handleChange}
           name="quote"
           placeholder="Artist Quote"
           type="text"
           value={formState.quote}
           id="quote"
        />
       <input type="submit" value={props.artist ? 'Edit Artist' : 'Add Artist'}/>
      </form>
    );
  }

export default Form;
