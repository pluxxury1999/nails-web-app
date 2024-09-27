import React, { useEffect } from "react";

import HeroSection from "../components/HomePage/HeroSection";
import MapSection from "../components/HomePage/MapSection";
import ReviewSlider from "../components/HomePage/ReviewSlider";
import ServicesSection from "../components/HomePage/ServicesSection";
import masters from "../components/MastersPage/masters"; // Замініть на правильний шлях до вашого файлу

const Home = () => {
    useEffect(() => {
        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        // Створюємо масив імен майстрів, які вже є в bookings
        const existingMasters = existingBookings.map(
            (booking) => booking.master
        );

        // Фільтруємо майстрів, яких ще немає в bookings
        const newMasters = masters.filter(
            (master) => !existingMasters.includes(master.name)
        );

        if (newMasters.length > 0) {
            const newMasterBookings = newMasters.map((master) => ({
                master: master.name,
                photo: master.photo,
                records: [],
            }));

            const updatedBookings = [...existingBookings, ...newMasterBookings];

            localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        }
    }, []);

    return (
        <>
            <HeroSection />
            <ReviewSlider />
            <ServicesSection />
            <MapSection />
        </>
    );
};

export default Home;
