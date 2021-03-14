import React, {useState} from 'react';

function ToDo({toDo}) {
    return (
        <div className = "to-do-list-member">
            <div className = "to-do-list-member-container">
                <h3 className = "to-do-list-member-title">{toDo.title}</h3>
                <div className = "to-do-list-member-check">
                    <p className = "to-do-list-member-priority">{toDo.priority}</p>
                    <input type = "checkbox" className = "check" />
                </div>
            </div>
            <hr className = "horizontal-line"/>
        </div>
    );
}

export default ToDo;