import {UserCardProps} from './pages/types'

function UserCard ({userName,isAdmin,status,onStatusToggle}:UserCardProps){
    return(
        <div>
            <p>
                User : {userName} {isAdmin && "(Admin)"}
            </p>
            <p>
                Status: {status}
            </p>
            <button onClick={()=> onStatusToggle(userName)}>Toggle Status</button>
        </div>
    )
}

export default function App(){
    return (
        <>
        <UserCard 
        userName='soarbh'
        isAdmin = {true}
        status='active'
        onStatusToggle={}
        />
        </>
    )
}