import React from "react";

export const Cart = ({
  cartDetails,
  onClickOfCart,
  goToBookedPage,
  bookedEvents,
}) => {
  console.log(cartDetails, "cartDetails");
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
        onClick={() => {
          if (onClickOfCart) onClickOfCart();
        }}
      >
        Cart Items {cartDetails.length}
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
        }}
        onClick={() => {
          if (onClickOfCart) onClickOfCart();
        }}
      >
        Booked Items {bookedEvents.length}
      </div>
    </div>
  );
};
