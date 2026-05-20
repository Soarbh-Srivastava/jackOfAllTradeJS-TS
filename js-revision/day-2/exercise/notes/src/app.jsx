// import Card from "./components/Card";
// import NavBar from "./components/navbar";

import { useState } from "react";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Card />
//     </>
//   );
// }

function App(){
    const [address,setAddress] = useState({
        phonNumber: "9779339086",
        address:{
            houseNo:"4324",
            street: "Street 23",
            district: "Ludhiana",
        }
    })
    
    const changeAddress =()=>{
        setAddress(prev =>({...prev3q,phonNumber:"7837609086"
            ,address:{
            ...prev.address,
            houseNo:"55",
            street: "Street 1",
            district: "Ludhiana",
        }}))
        }

    return (
        <div>
            <button onClick={changeAddress} >Update State</button>
            <div>State: {JSON.stringify(address)}</div>
        </div>
    )
}
export default App;

