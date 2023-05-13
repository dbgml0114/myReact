import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos]= useState([]);
  const onChange = (event)=> setTodo(event.target.value);
  const onSubmit = (event)=> {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    
    setTodo("");
    //변경된 todo 를 현재 배열에 넣는 구문 ...+ 배열명
    setTodos((currentArray) => [toDo , ...currentArray]);
  };
  return (
    <div className="App">
      <h1>My Todos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="내용을 입력해주삼"/>
        <button>Add</button>
      </form>
      <hr/>
      <ul>{toDos.map((item, index)=><li key={index}>{item}</li>)}</ul>
    </div>
  );
}

export default App;
