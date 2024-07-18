import { Cart } from "../component/Cart";

export const Booked = ({ bookedEvents }) => {
  return (
    <div>
      {bookedEvents.map((booked) => {
        return (
          <div>
            booked event name {booked.event} <br></br> booked Seats{" "}
            {booked.bookedSeats}
          </div>
        );
      })}
    </div>
  );
};
