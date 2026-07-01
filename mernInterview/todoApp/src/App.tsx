import { useState } from "react"

interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
}

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [taskText, setTaskText] = useState<string>("");

    function onchangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskText(e.target.value);
    }

    function onSumbitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        // Prevent adding completely empty tasks
        if (!taskText.trim()) return; 

        setTodos([...todos, { 
            id: Date.now(), 
            todo: taskText, 
            isCompleted: false 
        }]);
        setTaskText(""); // Clear input
    }

    function deleteTodo(id: number) {
        let updatedTodos = todos.filter(t=>t.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            
            {/* Swapped the div for a form! */}
            <form onSubmit={onSumbitHandler} className="mb-4">
                <input 
                    className="border w-64 p-1 text-sm" 
                    value={taskText} 
                    onChange={onchangeHandler} 
                    placeholder="Enter task..."
                />
                <button 
                    type="submit"
                    className="bg-blue-300 px-6 py-1 rounded-full mx-4"
                >
                    Submit
                </button>
            </form>

            <table className="mt-8 border border-gray-400 w-96 text-center">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">ID</th>
                        <th className="border border-gray-400 px-4 py-2">Task</th>
                        <th className="border border-gray-400 px-4 py-2">Status</th>
                        <th className="border border-gray-400 px-10 py-2">Actions</th>
                        <th className="border border-gray-400 px-10 py-2 ">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td className="border border-gray-400 px-4 py-2">{todo.id}</td>
                            <td className="border border-gray-400 px-4 py-2">{todo.todo}</td>
                            <td className="border border-gray-400 px-4 py-2">
                                {todo.isCompleted ? "Completed" : "Not Completed"}
                            </td>
                            <td className="border border-gray-400 px-10 py-2">
                                <button 
                                    onClick={() => {
                                        setTodos(todos.map(t => t.id === todo.id ? {...t, isCompleted: !t.isCompleted} : t));
                                    }}
                                    className={todo.isCompleted ? "bg-green-300 px-4 py-1 rounded-full":"bg-red-300 px-4 py-1 rounded-full"}
                                >
                                    {todo.isCompleted ? "Done" : "undone"}
                                </button>
                            </td>
                            <td className="border border-gray-500 ">
                                <button className="text-red-600"
                                onClick={() => deleteTodo(todo.id)}
                                >Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}