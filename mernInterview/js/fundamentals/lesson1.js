//Topic: what is js?


console.log("1 script start");

setTimeout(()=>{
  console.log('2 timeOut finises')
},0);

console.log("3. script ends");

// why this happen
// The callstack: the console statement for 1 and 3 are syncronous task they are push direclty on the callstack
// The callback queue ( Macrotask queue): Even with a delay of 0 once timer is up. the callback function cannot jump back on the main thread execution.
// Event loop : the event loop acts like a bouncer. it constanly check the call stack. it will only move once task from the callback queue to callstack once the stack is empty.
  
