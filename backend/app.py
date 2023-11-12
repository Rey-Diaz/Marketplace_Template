from flask import Flask, jsonify, request
from flask_cors import CORS
import stripe
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()

stripe.api_key = os.environ['VITE_STRIPE_SECRET_KEY']

@app.route('/create-payment-intent', methods=['POST'])
def create_payment_intent():
    try:
        data = request.json
        payment_method_id = data.get("payment_method_id")
        amount_in_dollars = data.get("amount")

        # Validate payment method ID and amount
        if not payment_method_id:
            raise ValueError("Payment method ID is required")
        if amount_in_dollars is None or not isinstance(amount_in_dollars, int) or amount_in_dollars <= 0:
            raise ValueError("Valid amount is required")
        
        # Convert amount from dollars to cents for Stripe
        amount_in_cents = int(amount_in_dollars * 100)

        intent = stripe.PaymentIntent.create(
            amount=amount_in_cents,  # Use the received amount
            currency='usd',
            payment_method=payment_method_id,
            payment_method_types=['card'],
            confirm=True
        )

        return jsonify({
            'clientSecret': intent.client_secret
        })
    except Exception as e:
        return jsonify(error=str(e)), 400

if __name__ == '__main__':
    app.run(port=5000)
