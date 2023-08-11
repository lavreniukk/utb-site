import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
                <Footer/>                
            </footer>
        </>
    );
};