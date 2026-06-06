import { useRef, useState } from "react";

interface UserProfile{
  id:number
  email:string
}



function App() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = ()=>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  }

  return(
    <>
    <p>{profile?.email}</p>
    <p>{profile && profile.email}</p>
    <input ref={inputRef} type= "text"/>
    </>
  )
}

export default App;
