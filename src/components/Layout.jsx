import {Outlet} from "react-router-dom";
import TopBar from "./topBar/TopBar.jsx";


const Layout = () => {
    return (
        <main>
            <TopBar></TopBar>
            <Outlet/>
        </main>
    )
}
export default Layout;