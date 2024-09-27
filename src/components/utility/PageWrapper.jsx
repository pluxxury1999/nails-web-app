import Footer from "./Footer";
import Header from "./Header";

const PageWrapper = ({ children }) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};

export default PageWrapper;