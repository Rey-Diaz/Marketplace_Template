from flask import Flask, jsonify, request
from flask_cors import CORS
import stripe
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)  # This is important to allow cross-origin requests from your React app

load_dotenv()  # This loads the variables from .env into the environment

stripe.api_key = os.environ['VITE_STRIPE_SECRET_KEY']

@app.route('/create-payment-intent', methods=['POST'])
def create_payment_intent():
    try:
        data = request.json
        payment_method_id = data.get("payment_method_id")

        # Check if payment method ID is provided
        if not payment_method_id:
            raise ValueError("Payment method ID is required")

        intent = stripe.PaymentIntent.create(
            amount=100,
            currency='usd',
            payment_method=payment_method_id,
            payment_method_types=['card'],  # Attach payment method
            confirm=True,
            
  #          automatic_payment_methods={
  #              'enabled': True,
  #              'allow_redirects': 'never'
  #          }
        )

        return jsonify({
            'clientSecret': intent.client_secret
        })
    except Exception as e:
        return jsonify(error=str(e)), 400


if __name__ == '__main__':
    app.run(port=5000)