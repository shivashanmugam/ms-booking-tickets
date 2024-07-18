export const Checkout = ({
  cartDetails,
  setCartDetails,
  bookedEvents,
  setBookedEvents,
  goToBookedPage,
}) => {
  console.log(cartDetails, "cartDetails");

  const reduceSeat = (eventIndex) => {
    const tempCart = [...cartDetails];
    tempCart[eventIndex].bookedSeats = tempCart[eventIndex].bookedSeats - 1;
    setCartDetails(tempCart);
  };

  const onBookTicket = () => {
    const tempBooked = [...bookedEvents, ...cartDetails];
    setBookedEvents(tempBooked);
    setCartDetails([]);
    goToBookedPage();
    // all the cart will be removed
    // booked will be updated
  };

  return (
    <div>
      {cartDetails.map((event, index) => {
        return (
          <div>
            Event Name: {event.event}
            <br></br>
            Event Seats: {event.bookedSeats};
            <button
              onClick={(e) => {
                reduceSeat(index);
              }}
            >
              reduce A Seat
            </button>
          </div>
        );
      })}
      <br></br>
      <div>
        <button onClick={onBookTicket}>Book Ticket</button>
      </div>
    </div>
  );
};
