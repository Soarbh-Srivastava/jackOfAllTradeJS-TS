import { Outlet,Link } from "react-router"

export function Layout(){
    return(
        <div>
            <div>
                <Link to = {"/"}>Home</Link>
                <Link to = {"/dashboard"}>DashBoard</Link>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}