import Form from './Form.js';

function Aside(props) {
    return (
      <aside>
        <h1>Add your own quotes:</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    );
}

export default Aside;
