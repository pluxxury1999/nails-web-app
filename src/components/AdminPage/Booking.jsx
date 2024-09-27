import React, { useEffect, useState } from 'react';

import BookingCard from './BookingCard'; // Імпорт компонента BookingCard
import { Box } from '@mui/material';

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Отримання даних із localStorage
    const bookingData = localStorage.getItem('bookings');
    if (bookingData) {
      const parsedData = JSON.parse(bookingData);
      // Групування записів за датами
      const groupedBookings = parsedData.map((master) => ({
        ...master,
        records: master.records.sort((a, b) => new Date(a.date) - new Date(b.date)),
      }));
      setBookings(groupedBookings);
    }
  }, []);

  // Функція для видалення запису
  const handleDeleteRecord = (masterName, recordIndex) => {
    // Оновлюємо список записів для відповідного майстра
    const updatedBookings = bookings.map((master) => {
      if (master.master === masterName) {
        const updatedRecords = [...master.records];
        updatedRecords.splice(recordIndex, 1); // Видаляємо запис за індексом
        return { ...master, records: updatedRecords };
      }
      return master;
    });
    // Оновлюємо стан і localStorage
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  return (
    <Box sx={{ p: 3 }}>
      {bookings.map((master, index) => (
        <BookingCard
          key={index}
          master={master.master}
          photo={master.photo}
          records={master.records}
          onDelete={handleDeleteRecord} // Передача функції видалення в компонент
        />
      ))}
    </Box>
  );
};

export default Booking;