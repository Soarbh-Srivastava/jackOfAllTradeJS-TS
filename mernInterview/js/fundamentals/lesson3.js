//How does JavaScript execute code?

/* source code  -> parser -> AST( abstract syntax tree) -> interpreter -> JIT(go here for code profiling and it retutn optimize version) -> byte code  execution

Every thing happen inside the Execution Context. you can think its as a enviroment or  a container where js code is evaluated and executed.

when a script first run, the engine create Global Exection(GEC). every time a function is called, a new Funciton Exection Context (FEC) is created.

There is two phase:

1. The Memory Creation Phase (Hoisting): Before running a single line of code, the Engine skim through the script and allocate memory space for varible and functions.

* varible declared with var are stored as undefined
* function declaration are stored in their entirety
*

2. The Code Execution Phase: The engine goes back to top and run the code line by line. It assings the actual values to the varible in memory and execute function calls



The call stack:
To keep track of all these context. js use Call stack.

1. The Global Exection context is pushed to the bottom of stack first.
2. when a function is called, it new Execution Context is pushed on top of stack
3. When the function finises and return, it context is popped off the stack and memory is garbage collected

 */
