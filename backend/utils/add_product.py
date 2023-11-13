import requests
import json

# URL of the Flask endpoint for adding a product
url = 'http://localhost:5000/product'  # Change the port if necessary

# Dummy data for the new product
product_data = {
    "name": "Sample Product",
    "description": "This is a sample product description.",
    "price": 99.99,
    "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
    ],
    "discount": 10,
    "rating": 4.5,
    "product_owner": "Sample Owner",
    "reviews": [
        {
            "reviewer": "John Doe",
            "comment": "Great product!",
            "rating": 5
        },
        {
            "reviewer": "Jane Smith",
            "comment": "Loved it!",
            "rating": 4
        }
    ]
}

# Make the POST request
response = requests.post(url, json=product_data)

# Print the response from the server
print('Status Code:', response.status_code)
print('Response:', response.json())
