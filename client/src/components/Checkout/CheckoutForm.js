import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useShoppingCartContext } from "../../hooks";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useShoppingCartContext();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <div style={{ display: 'flex', justifyContent: 'center', height: '30px', marginTop: '2rem', marginBottom: '2rem'}}>
        <button 
        onClick={() => clearCart()}
        disabled={isProcessing || !stripe || !elements} 
        id="submit" style={{ width: '12rem', borderRadius: '4px', backgroundColor: 'rgb(105, 103, 103, .1)', color: 'black', border: '1px solid', fontFamily: 'Abel, sans-serif'}}>
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
      </div>
      
      {/* Show any error or success messages */}
      {/* {message && <div id="payment-message">{message}</div>} */}
    </form>
  );
}