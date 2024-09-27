import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";

import { Navigate, Route, Routes } from "react-router-dom";

import AdminAuthForm from "./components/AdminPage/AdminAuthForm";
import Home from "./pages/Home";
import Masters from "./pages/Masters";
import PageWrapper from "./components/utility/PageWrapper";
import Services from "./pages/Services";

function App() {
    return (
        <PageWrapper>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/masters" element={<Masters />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </PageWrapper>
    );
}
export default App;
