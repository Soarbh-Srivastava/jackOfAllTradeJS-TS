import { TodoListProps } from "./types";

export function TodoList({todo,onToggleTodo}:TodoListProps){

    const list = todo.map(
         todo => 
         <p key={todo.id} onClick={()=>onToggleTodo(todo.id)}> 
         {todo.text}, 
         complete: {todo.complete?"yes":"no"}
         </p>)
    return(
        <div>
            {list}
        </div>
    )
}
