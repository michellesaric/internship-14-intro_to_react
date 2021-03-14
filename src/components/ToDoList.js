import React from 'react';
import ToDo from './ToDo';


function ToDoList( {toDos})  {
    if(toDos.length === 0) {
        return (
            <div className = "to-do-list-empty">
                <h3>No items</h3>
            </div>
        );    
    } else {
        return (
            <div className = "to-do-list">
                {toDos.map(toDo => (
                    <ToDo key={toDo.id} toDo = {toDo} />
                ))}
            </div>
        );
    }
}

export default ToDoList;