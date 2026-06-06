export interface Todo {
    id:number
    text:string
    complete: boolean
}

export interface TodoListProps {
    todo:Todo[]
    onToggleTodo: (id:number)=>void;
}