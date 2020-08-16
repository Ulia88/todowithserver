import React, {useState} from 'react';


function Controller(props) {

    const[newTodo, setNewTodo] = useState('')

const buttonHandler = () => {
    props.addNewTodo(newTodo)
    setNewTodo('')
}


  return (
    <div>
        <input value={newTodo} onChange = { (e) => setNewTodo(e.target.value)}/>
<button onClick={buttonHandler}> CREATE </button>


    </div>
  );
}

export default Controller;
