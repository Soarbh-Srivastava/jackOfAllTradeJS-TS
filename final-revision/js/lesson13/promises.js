// Promise ar created to make asynchronus js easier to use;
// stage
// pending
// rejected
// fulfilled

// why promises ?
// many callback become hard to read and hard to maintain
step1(function (r1){
    step2(r1, function(r2){
        step3(r2, function(r3){
            console.log(r3);
        })
    })
})

//this cause callback hell

// Creating a Promise
let myPromise = new Promise(function(resolve, reject){
    resolve(value) // success
    reject(value) // failed
})

myPromise.then(
    function(value){},
    function(value){}
)
// Promises How to 

let myPromises = new Promise(function(resolve, reject){
    ok = true;

    if(ok){
        resolve("ok")
    }
    else{
        reject("Error")
    }
});
myPromise.then(
    function(value) { myDisplayer(value);},
    function(value) { myDisplayer(value);}
)

// .then(onFulfilled, onRejected) 
// this method attaches handler for both the fulfillment and rejection cases
// It return a new Promise, which enable method chaing

// .catch(onRejected) 
// this help handel error

// .finally(onFinally)
// this handler is called when promises is settle regarless of outcome
// help for cleanup




// Return a  Promise

function step1(){
    return Promise.resolve("A");
}
function step2(){
    return Promise.resolve(value + "B");
}
function step3(){
    return Promise.resolve(value + "c");
}

step1()
.then(function(value){
    return step2(value);
})
.then(function(value){
    return step3(value);
})
.then(function(value){
    return myDisplayer(value);
})


// some important function

// Promise.all(intrable) fulfilled when all the promises in interable are fulfilled
// reject immedialy of any promise reject 

// promise.allSetteld(iterable) wait for all the promises to settle (accept or reject) 
// as soon as any of the promise in the itrable settels

// promise.race(iterable) as soon as any of the promise in the iterable settles.

// promise.any(iterable) fulfils as soon as any promise in iterable fulfills;
// rejects if all the promises reject


// waiting for a timeout 
setTimeout(function(){myfunc("I love you!!")},300000)

function myfunc(value){
    document.getElementById("demo").innerHTML = value;
}

// using promise
let myProm = new Promise(function(res,rej){
    setTimeout(function(){
        res("I Love u")
    },3000)
})
myProm.then(function(value){
    document.getElementById("demo").innerHTML = value
})
