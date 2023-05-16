import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

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
    <div>
        Payment
        {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <CheckoutForm />
            </Elements>
        )}
    </div>
  )
}