import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";

export const Layout = () => {
    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                
            </footer>
        </>
    );
};