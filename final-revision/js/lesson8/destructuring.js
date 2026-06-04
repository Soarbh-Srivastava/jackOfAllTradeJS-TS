// destructing is like we get some output and we break it into chunk and place in variable
// where as rest is assoicate with input but does same

const a =[10,20,30,40];
const [x,y,z] = a;
console.log(x,y,z);

// rest use
let [fst,,...last] = ["a","b","c","d"]
console.log(fst)
console.log(last)

// Swap using destructing
let e = 10, f= 20;
[e,f]=[f,e]
console.log(e);
console.log(f);

function alpa(){
    return ["x","y","z"]
}

let [q,w] = alpa();
console.log(q)
console.log(w)

//object destructing
const mark = {
    section1: { al: 15, be: 16},
    section2: { al: -31, be: 19}
};
const { section1:{al: al1, be: be1}} = mark;
console.log(al1,be1);

let obj = {
    name:"gfg",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "141015"
        }
    },
}

//should be orignal object property name
let { name,add} = obj;
console.log(name, add)