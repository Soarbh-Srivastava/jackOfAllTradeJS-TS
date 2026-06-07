import { useReducer } from "react";

interface CounterState{
  count: number;
}
type CounterAction = | {type: 'increment';payload:number} | {type: 'decrement'; payload: number} | {type: 'reset'}

function counterReducer(state: CounterState, action: CounterAction):CounterState{
switch(action.type){
  case 'increment':
    return {count : state.count + action.payload}
  case 'decrement':
    return { count: state.count - action.payload}
  case 'reset':
    return {count: 0}
  default:
    return state
}
}

function App() {
  const [ state, dispatch] = useReducer(counterReducer, {count:0});
  return()
}

export default App;
