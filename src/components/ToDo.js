import React from 'react';

function ToDo({toDo}) {

    const handleCheckIfDone = (e) => {
        const title = document.querySelector(".to-do-list-member-title");
        if(e.target.checked === true) {
            title.style.color = "gray";
            title.style.textDecoration = "line-through";
        } else {
            title.style.color = "#1a191a";
            title.style.textDecoration = "none";
        }
    }
    return (
        <div className = "to-do-list-member">
            <div className = "to-do-list-member-container">
                <h3 className = "to-do-list-member-title">{toDo.title}</h3>
                <div className = "to-do-list-member-check">
                    <p className = "to-do-list-member-priority">{toDo.priority}</p>
                    <input type = "checkbox" className = "check" onClick={handleCheckIfDone}/>
                </div>
            </div>
            <hr className = "horizontal-line"/>
        </div>
    );
}

export default ToDo;