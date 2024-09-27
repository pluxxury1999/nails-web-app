import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";

import { Navigate, Route, Routes } from "react-router-dom";

import AdminAuthForm from "./components/AdminPage/AdminAuthForm";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Masters from "./pages/Masters";
import PageWrapper from "./components/utility/PageWrapper";
import Services from "./pages/Services";
import bookings from "./data/bookings";
import comments from "./data/comments";
import { useEffect } from "react";

function App() {

    useEffect(() => {
        // Ініціалізація bookings
        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        // Якщо в localStorage немає записів, додаємо дані з bookings
        if (existingBookings.length === 0) {
            localStorage.setItem("bookings", JSON.stringify(bookings));
        } else {
            // Створюємо масив імен майстрів, які вже є в bookings
            const existingMasters = existingBookings.map(
                (booking) => booking.master
            );

            // Фільтруємо майстрів, яких ще немає в bookings
            const newMasters = bookings.filter(
                (booking) => !existingMasters.includes(booking.master)
            );

            if (newMasters.length > 0) {
                const updatedBookings = [...existingBookings, ...newMasters];
                localStorage.setItem(
                    "bookings",
                    JSON.stringify(updatedBookings)
                );
            }
        }

        // Ініціалізація comments
        const existingComments =
            JSON.parse(localStorage.getItem("comments")) || [];

        // Якщо в localStorage немає коментарів, додаємо дані з comments
        if (existingComments.length === 0) {
            localStorage.setItem("comments", JSON.stringify(comments));
        } else {
            // Створюємо масив імен майстрів, які вже є в comments
            const existingCommentMasters = existingComments.map(
                (comment) => comment.master
            );

            // Фільтруємо майстрів, яких ще немає в comments
            const newCommentMasters = comments.filter(
                (comment) => !existingCommentMasters.includes(comment.master)
            );

            if (newCommentMasters.length > 0) {
                const updatedComments = [
                    ...existingComments,
                    ...newCommentMasters,
                ];
                localStorage.setItem(
                    "comments",
                    JSON.stringify(updatedComments)
                );
            }
        }
    }, []);

    return (
        <PageWrapper>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/masters" element={<Masters />} />
                <Route path="/services" element={<Services />} />
                <Route path="/admin" element={<AdminAuthForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </PageWrapper>
    );
}
export default App;
