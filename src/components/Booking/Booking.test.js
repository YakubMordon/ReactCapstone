import { render, screen, fireEvent } from "@testing-library/react";
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

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

describe('Booking Component', () => {
  it('renders Booking component', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
  });

  it('validates date input', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  });

  it('updates reservation time', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    const selectTime = screen.getByLabelText(/choose time/i);
    fireEvent.change(selectTime, { target: { value: '18:00' } });
    expect(selectTime.value).toBe('18:00');
  });

  it('updates guests number', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    const rangeInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(rangeInput, { target: { value: '5' } });
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });

  it('updates occasion', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    const selectOccasion = screen.getByLabelText(/occasion/i);
    fireEvent.change(selectOccasion, { target: { value: 'Anniversary' } });
    expect(selectOccasion.value).toBe('Anniversary');
  });

  it('disables submit button when date is not valid', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    expect(screen.getByText(/make your reservation/i)).toBeDisabled();
  });

  it('enables submit button when date is valid', () => {
    render(<Booking availableTimes={mockAvailableTimes} />);
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2023-02-14' } });
    expect(screen.getByText(/make your reservation/i)).toBeEnabled();
  });
});