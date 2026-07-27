// Is JavaScript interpreted or compiled?


/*
 Originally the js was build as interpreted language, executed line by line by the brower. Today modern js uses hybrid model called JIT (Just in Time) compliation. This provided the fast startup time of an interpreted language alongside the high preformance of pre-compiled language.



Under the hood
Modern Javascript engines (like Google's V8 or Mozilla's SpiderMonkey) handle execution dynamically rather than just reading code top-to-bottom.  Here is the step-by-step process:


Parsing: First, the engine parses your code into an Abstract Syntax Tree (AST). 


JIT Compilation: It Just-In-Time (JIT) compiles it directly into machine code for rapid execution. 

Dynamic Optimization: The engine initially runs the code through a quick baseline compiler (or interpreter) so the web page loads instantly. As the script runs, a "profiler" watches for "hot" code—functions or loops that are executed repeatedly. The engine then quietly recompiles that hot code in the background into highly optimized machine code, swapping it in to drastically boost speed.

 */

function calculateSum(a, b) {
  return a + b;
}

let total = 0;

// When this loop starts, the engine interprets the code to begin immediately.
// As it repeats thousands of times, the JIT compiler marks `calculateSum` as "hot"
// and automatically compiles it into optimized machine code for blazing-fast execution.
for (let i = 0; i < 100000; i++) {
  total = calculateSum(total, i);
}

console.log(total);
