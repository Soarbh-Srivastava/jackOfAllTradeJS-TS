// import { useEffect, useState } from "react";

// interface UserData{
//   id: number;
//   name: string;
//   email: string;
// }
// interface Post{
//   id:number;
//   title:string;
//   body:string;
// }

// function App() {
  
//   const [user,setUser] = useState<UserData|null>(null);
//   const [posts, setPosts] = useState<Post[]|[]>([]);

//   useEffect(()=>{
//     fetch("http://jsonplaceholder.typicode.com/posts")
//     .then(res=> res.json())
//     .then((data:Post[])=>{
//       /*{telling ts: "trust me, this is an array of posts"}*/
//       setPosts(data)
//     })
//   },[])
//   return (
//     <div>
//       {user ? <p>Welcome,{user.name} ,email: {user.email}</p>: <p>Loading...</p>}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";


interface Post{
  id:number;
  title:string;
  body:string;
}

export default function App(){
  const [posts,setPosts] = useState<Post[]>([]);
  const [isLoading,setLoading] = useState(true);
  const [error,setError] = useState<string | null>(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      if(!res.ok){
        throw new Error('Network error')
      }
      return res.json()
    })
    .then((data:Post[])=>{
      setPosts(data.splice(0,5));
      setError(null)
    })
    .catch((err)=>[
      setError(err.message)
    ])
    .finally(()=>{
      setLoading(false);
    })
  },[])

  if(isLoading) return <p>Loading blog post...</p>;
  if(error) return<p>{error}</p>
  return(
    <div>
      <h3>Latest Blog</h3>
      {posts.map((post)=>(
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  )
}