import React, {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import "./App.css";
function App() {

  const [toDos, setToDos] = useState([]);

  function addToDo(toDo) {
    setToDos([...toDos, toDo]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToDoForm addToDo={addToDo}/>
        <div className = "to-do">
          <div className = "to-do-title">
            <h3>ToDos</h3>
          </div>
          <ToDoList toDos = {toDos} />
        </div>
      </header>
    </div>
  );
}

export default App;
