import { useState } from "react";
import { Todo } from "./types";
import { TodoList } from "./todoList";

function App() {
  const [todos,setTodos] = useState<Todo[]>([]);
  const [inputText,setInputText] = useState("");
  const addTodo =(text:string)=>{
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      complete: false
    }
    setTodos([...todos,newTodo])
    setInputText("");
  }

  const toggleTodo = (id:number)=>{
    const updateTodos = todos.map(todo=>{
      if(todo.id === id){
        return {...todo,complete: !todo.complete}
      }
      return todo;
    })
    setTodos(updateTodos);
  }
  return (
    <main className="app">
      <input
      type="text"
      placeholder="Type here ...."
      value={inputText}
      onChange={(e) =>setInputText(e.target.value)}
      />
      <button onClick={()=>addTodo(inputText)}>Add Todo</button>
      <TodoList todo={todos} onToggleTodo={toggleTodo}/>
    </main>
  );
}

export default App;
