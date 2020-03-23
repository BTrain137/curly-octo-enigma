import React from "react";
import StripCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // Test key not for production
  const publishableKey = "pk_test_JJd1REagaXw0vwa1J7sz5MST00V3GNEJ9E";
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
