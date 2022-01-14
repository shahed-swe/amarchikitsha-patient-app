import { NavbarBottom } from "../navbar/navbarbottom";
import { NavbarTop } from "../navbar/navbartop";

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavbarTop />
            <main className="flex-1 flex flex-col">{children}</main>
            <NavbarBottom />
        </div>
    );
}