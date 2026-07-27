// Q => What is the JavaScript engine?

/*

A JavaScript engine is  a system that browsers use because they cannot natively read JavaScript code. Popular examples include Google's V8 and Mozilla's SpiderMonkey. Modern engines handle execution dynamically rather than reading code top-to-bottom. They parse the code into an Abstract Syntax Tree (AST) and Just-In-Time (JIT) compile it directly into machine code for fast execution.

*/

// Q => What is V8 ?

/*

V8 is Google's open-source, high-performance JavaScript engine. It is the underlying system that powers the Google Chrome browser, as well as backend runtime environments like Node.js.

Under the Hood
For an interview, highlighting V8's specific architecture shows a deep understanding of JavaScript performance. Here are the core components to mention:


1. The Execution Pipeline: V8 parses your JavaScript code into an Abstract Syntax Tree (AST) and Just-In-Time (JIT) compiles it directly into machine code for incredibly fast execution.

2. Dynamic Optimization : As your script runs, a hidden "profiler" monitors the execution to identify "hot" code, which are functions or loops executed repeatedly. V8 drastically improves performance on the fly by recompiling this hot code into highly optimized machine code.

3. Garbage Collection : V8 automatically manages memory. It features a background process that systematically cleans up unused memory objects, preventing memory leaks and keeping applications from crashing.

*/


// Q => We just noted that V8 is the engine behind Node.js, allowing JavaScript to run beyond the browser. Why is V8's ability to compile JavaScript directly into machine code so critical for a backend server environment?

/*
 A server is just a powerful computer, and its CPU only speaks one language: machine code. By compiling JavaScript directly into machine code, V8 allows Node.js to communicate directly with the server's hardware without needing a browser to act as a middleman. This is what makes Node.js lightning-fast and capable of handling thousands of backend requests simultaneously.
 */
