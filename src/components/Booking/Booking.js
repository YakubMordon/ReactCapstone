import { useState } from 'react';
import './Booking.css';

export default function Booking({availableTimes}) {
  const [date, setDate] = useState('');
  const [reservationTime, setReservationTime] = useState(availableTimes[0]);
  const [guestsNumber, setGuestsNumber] = useState('1');
  const [occasion, setOccassion] = useState('Birthday');

  const isDateValid = date.length !== 0;

  return (
    <form className="reservation-form">
        <label htmlFor="res-date">* Choose date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required={true}/>
        {!isDateValid && <div className='error'>Date is required</div>}

        <label htmlFor="res-time">* Choose time</label>
        <select id="res-time" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} required={true}>
            {availableTimes.map(value => <option key={value}>{value}</option>)}
        </select>

        <label htmlFor="guests">* Number of guests</label>
        <input type="range" min="1" max="10" id="guests" value={guestsNumber} onChange={(e) => setGuestsNumber(e.target.value)} required={true}/>
        <output className='guestsOutput' htmlFor="guests">{guestsNumber}</output>

        <label htmlFor="occasion">* Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccassion(e.target.value)} required={true}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <input aria-label="On Click" type="submit" value="Make Your Reservation" disabled={!isDateValid}/>
    </form>
  )
}
