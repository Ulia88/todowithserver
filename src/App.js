import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";
import axios from "axios";


function App() {

    const [task, setTasks] = useState([])

    const deleteTask = async (todoId) => {
        // const delTask = task.filter(el => el._id !== id)
        // setTasks(delTask)
       await axios.delete(`http://localhost:5000/todo/${todoId}`)
            .then(function (response){

            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });
        await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer);
                setTasks(listFromServer)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }

    const addTask = async (newName) => {
        // const addNewTask = {id: Math.random(), name: newName, done:false}
        // const add = [...task, addNewTask]
        // setTasks(add)

       await axios.post('http://localhost:5000/todo',{name: newName})
            .then(function (response){
                // const listFromServer = response.data
                // console.log(listFromServer);
                // setTasks(listFromServer)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });


       await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer);
                setTasks(listFromServer)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }

    // const markDone = async (todoId) => {
    //     const update = task.map(el => {
    //         if (el._id === id) return {...el, done};
    //         return el
    //     })
    //     setTasks(update)
    //
    // }

    const editItem = async (newTitle, todoId) => {
        // const makeEdit = task.map(el => {
        //   if (el._id === id) return {...el, name: newName};
        //   return el
        // })
        // setTasks(makeEdit)
        await axios.patch(`http://localhost:5000/todo/${todoId}`,{name: newTitle})
            .then(function (response){

            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });


        await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer);
                setTasks(listFromServer)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    const makeLineTrough = async (todo) => {
        // const line = task.map((el) => {
        //     if (el._id === id) return {...el, done: !el.done}
        //     return el
        // })
        // setTasks(line)
        await axios.put(`http://localhost:5000/todo/${todo._id}`,{done: !todo.done})
            .then(function (response){

            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });


        await axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer);
                setTasks(listFromServer)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    const moveUp = (currentElement, previousElement) => {
        if (previousElement < 0 || previousElement >= task.length) return                           //in case nothing is broken
        const up = task.map((el, i) => {
        if (currentElement === i) return task[previousElement];
        if (previousElement === i) return task[currentElement];
        return el
        })
        setTasks(up)
    }

    useEffect(() => {
        axios.get('http://localhost:5000/todo')
            .then(function (response){
                const listFromServer = response.data
                console.log(listFromServer);
                setTasks(listFromServer)
            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])


    return (


        <div>

            <Form addTask={addTask}/>
            <List task={task}
                  deleteTask={deleteTask}
                  // markDone={markDone}
                  editItem={editItem}
                  makeLineTrough={makeLineTrough}
                  moveUp={moveUp}
            />



        </div>
    );
}

export default App;
