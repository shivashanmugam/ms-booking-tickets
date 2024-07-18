import React, { useState } from "react";
import { eventsMain } from "../data/events";

export const Event = ({ event, onAddToCart }) => {
  const [seatsSelected, setSeatsSelected] = useState();

  return (
    <div>
      Available Seats : {event.seats}
      <div>
        Select the number of seats
        <input
          type="number"
          onChange={(e) => {
            setSeatsSelected(e.target.value);
          }}
        />
        <button
          onClick={() => {
            onAddToCart(seatsSelected);
          }}
        >
          Add Seats to Car
        </button>
      </div>
    </div>
  );
};
