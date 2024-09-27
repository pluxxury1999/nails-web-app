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
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [bookedTimes, setBookedTimes] = useState([]);
    const [isBookingSuccess, setBookingSuccess] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

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
    ];

    useEffect(() => {
        if (master && master.name) {
            const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
            const masterData = bookings.find(
                (item) => item.master === master.name
            );

            if (masterData && Array.isArray(masterData.records)) {
                setBookedTimes(masterData.records);
            } else {
                setBookedTimes([]);
            }
        }
    }, [master]);

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const generateDates = () => {
        const dates = [];
        const currentDate = new Date();
        for (let i = 0; i < 30; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + i);
            dates.push(date.toISOString().split("T")[0]);
        }
        return dates;
    };

    const availableDates = generateDates();

    const timeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const isTimeOverlap = (start1, end1, start2, end2) => {
        return Math.max(start1, start2) < Math.min(end1, end2);
    };

    const calculateFinishTime = (startTime, duration) => {
        const [hours, minutes] = startTime.split(":").map(Number);
        const totalMinutes = hours * 60 + minutes + duration;
        const finishHours = Math.floor(totalMinutes / 60);
        const finishMinutes = totalMinutes % 60;
        const finishTime = `${String(finishHours).padStart(2, "0")}:${String(
            finishMinutes
        ).padStart(2, "0")}`;
        return finishTime;
    };

    const isTimeSlotAvailable = (timeSlot) => {
        if (!selectedDate || !selectedServiceDuration) return true;

        const newStart = timeToMinutes(timeSlot);
        const newEnd = newStart + selectedServiceDuration;

        return !bookedTimes.some((record) => {
            if (record.date !== selectedDate) return false;
            const existingStart = timeToMinutes(record.time);
            const existingEnd = timeToMinutes(record.finishTime);
            return isTimeOverlap(newStart, newEnd, existingStart, existingEnd);
        });
    };

    const isPastDateTime = (timeSlot) => {
        if (!selectedDate || !timeSlot) return false;
        const selectedDateTime = new Date(`${selectedDate}T${timeSlot}`);
        return selectedDateTime < new Date();
    };

    const handleBooking = () => {
        if (!validatePhone(customerPhone)) {
            setPhoneError("Введіть коректний номер телефону (10 цифр).");
            return;
        }

        const finishTime = calculateFinishTime(
            selectedTime,
            selectedServiceDuration
        );

        const bookingRecord = {
            service: selectedService,
            date: selectedDate,
            time: selectedTime,
            finishTime: finishTime,
            customer: {
                name: customerName,
                phone: customerPhone,
            },
        };

        const existingBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        // Знаходимо індекс майстра в масиві
        const masterIndex = existingBookings.findIndex(
            (item) => item.master === master.name
        );

        if (masterIndex !== -1) {
            const masterData = existingBookings[masterIndex];

            // Переконуємося, що records є масивом
            if (!Array.isArray(masterData.records)) {
                masterData.records = [];
            }

            const newStart = timeToMinutes(selectedTime);
            const newEnd = newStart + selectedServiceDuration;

            const isOverlap = masterData.records.some((record) => {
                if (record.date !== selectedDate) return false;
                const existingStart = timeToMinutes(record.time);
                const existingEnd = timeToMinutes(record.finishTime);
                return isTimeOverlap(
                    newStart,
                    newEnd,
                    existingStart,
                    existingEnd
                );
            });

            if (isOverlap) {
                alert("Цей час вже зайнятий. Будь ласка, виберіть інший час.");
                return;
            }

            // Додаємо новий запис
            masterData.records.push(bookingRecord);

            // Оновлюємо майстра в масиві
            existingBookings[masterIndex] = masterData;
        } else {
            // Якщо майстра немає, додаємо його
            const newMasterData = {
                master: master.name,
                photo: master.photo,
                records: [bookingRecord],
            };
            existingBookings.push(newMasterData);
        }

        // Зберігаємо оновлені дані
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

        // Оновлюємо стан заброньованих часів
        setBookedTimes([...bookedTimes, bookingRecord]);

        setBookingSuccess(true);
        setBookingDetails({
            master: master.name,
            service: selectedService,
            date: selectedDate,
            time: selectedTime,
        });
    };

    return (
        <Box>
            {isBookingSuccess ? (
                <Box sx={{ textAlign: "center", p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        Ви успішно записалися!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Послуга: {bookingDetails.service}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Дата: {bookingDetails.date}
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
                        onClick={onBack}
                        sx={{ mt: 3 }}
                    >
                        Закрити
                    </Button>
                </Box>
            ) : (
                <>
                    <Button
                        onClick={onBack}
                        variant="outlined"
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
                                setSelectedServiceDuration(service.duration);
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
                        Виберіть дату
                    </Typography>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Виберіть дату</InputLabel>
                        <Select
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            label="Виберіть дату"
                        >
                            {availableDates.map((date, index) => (
                                <MenuItem key={index} value={date}>
                                    {date}
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
                            disabled={!selectedDate}
                        >
                            {availableTimes.map((time, index) => (
                                <MenuItem
                                    key={index}
                                    value={time}
                                    disabled={
                                        !isTimeSlotAvailable(time) ||
                                        isPastDateTime(time)
                                    }
                                >
                                    {time}{" "}
                                    {!isTimeSlotAvailable(time)
                                        ? "(Зайнято)"
                                        : ""}
                                    {isPastDateTime(time)
                                        ? " (Минулий час)"
                                        : ""}
                                </MenuItem>
                            ))}
                        </Select>
                        {selectedTime &&
                            (!isTimeSlotAvailable(selectedTime) ||
                                isPastDateTime(selectedTime)) && (
                                <FormHelperText error>
                                    {isPastDateTime(selectedTime)
                                        ? "Вибраний час уже минув. Будь ласка, виберіть інший час."
                                        : "Вибраний час зайнятий. Будь ласка, виберіть інший час."}
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
                            setPhoneError("");
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
                            !selectedDate ||
                            !selectedTime ||
                            !customerName ||
                            !customerPhone ||
                            !isTimeSlotAvailable(selectedTime) ||
                            isPastDateTime(selectedTime)
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