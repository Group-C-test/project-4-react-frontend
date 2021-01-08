import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      title:'',
      author:'',
      phone:''
    });

    useEffect(() => {
      if(props.notice) {
        setFormState({
          title: props.notice.title,
          author: props.notice.author,
          phone: props.notice.phone,
          id: props.notice.id
        })
      }
    }, [props.notice]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(props.notice) formState.id = props.notice.id
    props.handleSubmit(event, formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="title"
          placeholder="Notice Title"
          type="text"
          value={formState.title}
          id="title"
         />
         <Input
           handleChange={handleChange}
           name="author"
           placeholder="Notice Author"
           type="text"
           value={formState.author}
           id="author"
        />
        <Input
          handleChange={handleChange}
          name="phone"
          placeholder="Notice Phone"
          type="text"
          value={formState.phone}
          id="phone"
       />
       <input type="submit" value={props.notice ? 'Edit Notice' : 'Add Notice'}/>
      </form>
    );
  }

export default Form;