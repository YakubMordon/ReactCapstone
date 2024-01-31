import { render, screen } from "@testing-library/react";
import Booking from './Booking';

test('Renders the Booking date label', () => {
    render(<Booking availableTimes={[]}/>);
    const chooseDateElement = screen.getByText("* Choose date");
    expect(chooseDateElement).toBeInTheDocument();
})

test('Renders the Booking time label', () => {
    render(<Booking availableTimes={[]}/>);
    const chooseTimeElement = screen.getByText("* Choose time");
    expect(chooseTimeElement).toBeInTheDocument();
})

test('Renders the Booking guest number label', () => {
    render(<Booking availableTimes={[]}/>);
    const chooseGuestNumberElement = screen.getByText("* Number of guests");
    expect(chooseGuestNumberElement).toBeInTheDocument();
})

test('Renders the Booking occassion label', () => {
    render(<Booking availableTimes={[]}/>);
    const chooseOccassionElement = screen.getByText("* Occasion");
    expect(chooseOccassionElement).toBeInTheDocument();
})