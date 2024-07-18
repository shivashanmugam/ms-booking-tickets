import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Event } from './pages/Event';
import { Checkout } from './pages/Checkout';
import { Booked } from './pages/Booked';
import { Cart } from './component/Cart'


function App() {

  const [page, setPage] = useState("home")
  const [currentEvent, setCurrentEvent] = useState(null);
  const [cartDetails, setCartDetails] = useState([]);
  const [bookedEvents, setBookedEvents] = useState([]);
  const onEventClick = (event) => {
    setCurrentEvent(event);
    setPage("event")
  }

  const onAddToCart = (seatNumbers) => {
    const tempCartDetails = [...cartDetails, { event: currentEvent.name, bookedSeats: seatNumbers }];
    setCartDetails(tempCartDetails);
  }

  const onClickOfCart = () => {
    setPage("checkout");
  }

  const goToBookedPage = () => {
    setPage("booking");
  }

  return (
    <div className="App">
      {page !== "checkout"} <Cart bookedEvents={bookedEvents} cartDetails={cartDetails} onClickOfCart={onClickOfCart} />
      {page === "home" && <Home onEventClick={onEventClick} />}
      {page === "event" && <Event onAddToCart={onAddToCart} event={currentEvent} />}
      {page === "checkout" && <Checkout goToBookedPage={goToBookedPage} bookedEvents={bookedEvents} setBookedEvents={setBookedEvents} setCartDetails={setCartDetails} cartDetails={cartDetails} />}
      {page === "booking" && <Booked bookedEvents={bookedEvents} />}
    </div>
  );
}

export default App;
