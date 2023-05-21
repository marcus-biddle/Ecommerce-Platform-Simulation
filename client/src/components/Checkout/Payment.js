import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { PaymentHeader, PaymentStyle } from './styled';

export const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("https://store-iota-seven.vercel.app/config").then(async(r) => {
            const { publishableKey } = await r.json();

            setStripePromise(loadStripe(publishableKey));
        })
    },[]);

    // In body you can grab total amount and send it to the server.
    useEffect(() => {
        fetch("https://store-iota-seven.vercel.app/create-payment-intent", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(async(r) => {
            const { clientSecret } = await r.json();

            setClientSecret(clientSecret);
        })
    },[]);

  return (
    <PaymentStyle>
        <p style={{ fontSize: '24px'}}>Payment</p>
        <p>Note: <span style={{ fontFamily: 'Abel', paddingLeft: '5px'}}>Please do not add any sensitive information. Instead, for the card number use <span style={{ backgroundColor: 'rgb(105, 103, 103, .25)'}}>4242 4242 4242 4242</span>.</span></p>
        {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckoutForm />
            </Elements>
        )}
    </PaymentStyle>
  )
}