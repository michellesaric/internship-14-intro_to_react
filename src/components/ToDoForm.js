import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import "../App.css";

function ToDoForm({addToDo})  {
    const [toDo, setToDo] = useState({
        id: "",
        title: "",
        priority: ""
    });

    function handleInputChange(e) {
        setToDo({ ...toDo, title: e.target.value});
    }

    function handleOptionChange(e)  {
        setToDo({...toDo, priority: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        addToDo({...toDo, id: uuidv4()});
        setToDo({ ...toDo, title: ""});
        setToDo({ ...toDo, priority: ""});
    }
    return (
        <div className = "to-do-form">
        <div className = "to-do-form-title">
            <h3>Add todo</h3>
        </div>
        <div className = "form-input">
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    name="title"
                    className = "title input"
                    placeholder = "Title"
                    value = {toDo.title}
                    onChange = {handleInputChange}
                    required
                />
                <textarea 
                    type = "text"
                    className = "description input"
                    rows = "3"
                    placeholder = "Description"
                    required
                />
                <select name="priority" className="priority input" onChange = {handleOptionChange} required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button type = "submit" className = "submit-button input">Submit</button>
            </form>
        </div>
    </div>
    )

}

export default ToDoForm;