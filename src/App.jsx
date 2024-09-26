import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Masters from "./pages/Masters";
import Services from "./pages/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";
import PageWrapper from "./components/utility/PageWrapper";


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
