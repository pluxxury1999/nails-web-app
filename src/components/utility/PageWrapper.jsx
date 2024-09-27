import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const PageWrapper = ({ children }) => {

    const location = useLocation();

    if(location.pathname === "/admin") {
        return children;
    }

    if (location.pathname === "/dashboard") {
        return (
            <>
                <AdminHeader />
                {children}
                <AdminFooter />
            </>
        );
    }

    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};

export default PageWrapper;