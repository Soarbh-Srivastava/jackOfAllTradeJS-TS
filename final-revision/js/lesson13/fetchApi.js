
//get
fetch("").then((res)=> res.JSON())
.then(data=>console.log(data))
.catch(err=>console.log(err))
//post
let test  = fetch("",{
    method: "POST",
    header:{
        "content-type":"application/json"
    },
    body: JSON.stringify({
        title:"newPost",
        xyz: 123
    })
})

test.then(res => res.JSON())
