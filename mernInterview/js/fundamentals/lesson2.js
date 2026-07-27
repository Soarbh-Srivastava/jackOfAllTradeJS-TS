// why is js single threaded
// the primary reason js is design and remain single threaded is DOM manipulation safety
//
// if js were multi thread, multiple thread could attempt to read, update or delete the exact same DOM element at the exact same time. This would lead to major concurrency issue, specifically race condition(outcome depend on which thread  finish first) and deadloack .By forcing a single thread of execution, js ensure that ui update happen in strict predicable, linear order
//

document.getElementById('submit-btn').remove();
document.getElementById('submit-btn').innerText = "Processing..";

// Q => If you had to run a massively CPU-intensive task in the browser without blocking the main thread, what specific feature or Web API would you use to achieve true background processing?

//Answer => when a massive CPU task without freezing the brower is done using web worker. web worker launch a new thread to do heavy lifting of heavy math
