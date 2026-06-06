import React, { useState } from "react";

// function App() {
//   const [userName,setUserName] = useState("");
//   const handleInputChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
//     setUserName(e.target.value);
//   } ;
//   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
//     e.preventDefault();
//     console.log("Form submitted safely!")
//   }
//   return (
//     <input
//       type="text"
//       value={userName}
//       onChange={handleInputChange}
//     />
//   );
// }

// export default App;

export default function App() {

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.target.value);
  }

  const onSumitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(`${email} : ${password}`)
  }

  return (
    <form onSubmit={onSumitHandler}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange}/>
      </div>
      <button type="submit">Sumit</button>
    </form>
  );
}
