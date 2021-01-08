import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
    //   title:'',
    //   author:'',
    //   phone:''
    });

    useEffect(() => {
      if(props.artist) {
        setFormState({
        //   title: props.notice.title,
        //   author: props.notice.author,
        //   phone: props.notice.phone,
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
           image="image"
           placeholder="Artist Img Url"
           type="text"
           value={formState.img_url}
           id="img_url"
        />
        {/* <Input
          handleChange={handleChange}
          name="phone"
          placeholder="Notice Phone"
          type="text"
          value={formState.phone}
          id="phone"
       /> */}
       <input type="submit" value={props.artist ? 'Edit Artist' : 'Add Artist'}/>
      </form>
    );
  }

export default Form;
