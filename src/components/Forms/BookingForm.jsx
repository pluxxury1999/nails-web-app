import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const BookingForm = ({ master, onBack }) => {
    const [selectedService, setSelectedService] = useState("");
    const [selectedServiceDuration, setSelectedServiceDuration] = useState(0);
    const [selectedTime, setSelectedTime] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [bookedTimes, setBookedTimes] = useState([]);
    const [isBookingSuccess, setBookingSuccess] = useState(false); // Стан для успішного запису
    const [bookingDetails, setBookingDetails] = useState(null); // Деталі бронювання

    const availableTimes = [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
    ]; // Приклад доступних годин

    // Функція для перевірки номера телефону
    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // Перевірка для українського номера
        return phoneRegex.test(phone);
    };

    // Завантаження заброньованих часових слотів з localStorage при завантаженні компонента
    useEffect(() => {
        if (master && master.name) {
            const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
            const masterBookings = bookings.filter(
                (booking) => booking.master === master.name
            );
            setBookedTimes(masterBookings.map((booking) => booking.time));
        }
    }, [master]);

    // Функція для визначення кількості заблокованих слотів на основі тривалості послуги
    const getBlockedSlots = (startSlot, duration) => {
        const startIndex = availableTimes.indexOf(startSlot);
        const slotsNeeded = Math.ceil(duration / 60); // Кількість потрібних слотів
        return availableTimes.slice(startIndex, startIndex + slotsNeeded);
    };

    // Перевірка наявності заблокованих слотів у selectedTime
    const isTimeUnavailable = () => {
        if (!selectedTime || !selectedServiceDuration) return false;
        const slotsToBlock = getBlockedSlots(
            selectedTime,
            selectedServiceDuration
        );
        return slotsToBlock.some((slot) => bookedTimes.includes(slot));
    };

    const handleBooking = () => {
        if (!validatePhone(customerPhone)) {
            setPhoneError("Введіть коректний номер телефону (10 цифр).");
            return;
        }

        const slotsToBlock = getBlockedSlots(
            selectedTime,
            selectedServiceDuration
        );

        const bookingData = slotsToBlock.map((slot) => ({
            master: master.name,
            service: selectedService,
            time: slot,
            duration: selectedServiceDuration,
            customerName: customerName,
            customerPhone: customerPhone,
        }));

        // Збереження всіх слотів у localStorage
        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];
        localStorage.setItem(
            "bookings",
            JSON.stringify([...existingBookings, ...bookingData])
        );

        // Оновлення заброньованих часових слотів у стані
        const newBookedTimes = [...bookedTimes, ...slotsToBlock];
        setBookedTimes(newBookedTimes);

        // Встановлення стану успішного запису
        setBookingSuccess(true);
        setBookingDetails({
            master: master.name,
            service: selectedService,
            time: selectedTime,
        });
    };

    return (
        <Box>
            {/* Якщо запис успішний, відображаємо повідомлення */}
            {isBookingSuccess ? (
                <Box sx={{ textAlign: "center", p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        Ви успішно записалися!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Послуга: {bookingDetails.service}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Час: {bookingDetails.time}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Майстер: {bookingDetails.master}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onBack} // Закриваємо попап
                        sx={{ mt: 3 }}
                    >
                        Закрити
                    </Button>
                </Box>
            ) : (
                <>
                    <Button
                        onClick={onBack}
                        variant="text"
                        color="secondary"
                        sx={{ mb: 2 }}
                    >
                        Закрити
                    </Button>
                    <Typography variant="h5" gutterBottom>
                        Записатись до {master.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Виберіть послугу
                    </Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Виберіть послугу</InputLabel>
                        <Select
                            value={selectedService}
                            onChange={(e) => {
                                const service = master.services.find(
                                    (s) => s.title === e.target.value
                                );
                                setSelectedService(service.title);
                                setSelectedServiceDuration(service.duration); // Встановлюємо тривалість послуги
                            }}
                            label="Виберіть послугу"
                        >
                            {master.services.map((service, index) => (
                                <MenuItem key={index} value={service.title}>
                                    {service.title} - {service.price} грн (
                                    {service.duration} хв)
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant="h6" gutterBottom>
                        Виберіть час
                    </Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Виберіть час</InputLabel>
                        <Select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            label="Виберіть час"
                        >
                            {availableTimes.map((time, index) => (
                                <MenuItem
                                    key={index}
                                    value={time}
                                    disabled={
                                        isTimeUnavailable() ||
                                        bookedTimes.includes(time)
                                    }
                                >
                                    {time}{" "}
                                    {isTimeUnavailable() ||
                                    bookedTimes.includes(time)
                                        ? "(Зайнято)"
                                        : ""}
                                </MenuItem>
                            ))}
                        </Select>
                        {selectedTime && isTimeUnavailable() && (
                            <FormHelperText error>
                                Вибраний час або наступний слот уже зайняті.
                                Будь ласка, виберіть інший час.
                            </FormHelperText>
                        )}
                    </FormControl>
                    <TextField
                        label="Ваше ім'я"
                        variant="outlined"
                        fullWidth
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Ваш телефон"
                        variant="outlined"
                        fullWidth
                        value={customerPhone}
                        onChange={(e) => {
                            setCustomerPhone(e.target.value);
                            setPhoneError(""); // Очистка помилки при зміні вводу
                        }}
                        error={!!phoneError}
                        helperText={phoneError}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleBooking}
                        disabled={
                            !selectedService ||
                            !selectedTime ||
                            !customerName ||
                            !customerPhone ||
                            isTimeUnavailable()
                        }
                        fullWidth
                    >
                        Підтвердити запис
                    </Button>
                </>
            )}
        </Box>
    );
};

export default BookingForm;