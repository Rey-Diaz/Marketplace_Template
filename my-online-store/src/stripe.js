// src/stripe.js
import { loadStripe } from '@stripe/stripe-js';

// Use your Stripe publishable key here
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default stripePromise;
