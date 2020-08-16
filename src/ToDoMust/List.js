import React, {useState} from 'react';



function List(props) {
const list = props.list; // declare list as a props


  return (
    <div>
      {list.map(el => {
       return <li
           key = {el.id}>
           {el.title}
           <button onClick={()=>props.deleteToDo(el.id)}>Delete</button>
         <input />

       </li>}
        )}




    </div>
  );
}

export default List;
