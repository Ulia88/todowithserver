import React, {useState} from 'react';
import List from "./List";
import Controller from "./Controller";


function App() {
    const [list, setList] = useState ([
        {id: 1, title:"First", done: false},
        {id: 2, title:"Second", done: false},
        {id: 3, title:"Third", done: false}
    ])

    const addNewTodo = (newTitle) => {
        const newTodo = {id: Math.random()*10, title: newTitle, done: false}
        const addNewItem = [...list, newTodo]
        setList(addNewItem)
    }

    const deleteToDo = (id) => {
        const removeItem = [...list].filter(el => el.id !== id)
        setList(removeItem)
    }


  return (
    <div>

        <Controller addNewTodo={addNewTodo}/>
        <List list={list} deleteToDo={deleteToDo}/>


    </div>
  );
}

export default App;
