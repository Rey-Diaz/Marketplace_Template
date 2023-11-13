import requests
import random

# URL of the Flask endpoint for adding a product
url = 'http://localhost:5000/product'  # Change the port if necessary

# Function to generate a random product
def generate_random_product(index):
    categories = ['Electronics', 'Books', 'Clothing', 'Home & Kitchen']
    names = ['Gadget', 'Novel', 'T-Shirt', 'Coffee Mug']
    descriptions = ['High quality', 'Bestselling', 'Comfortable', 'Durable']
    images_base_url = 'https://example.com/product'

    return {
        "name": f"{random.choice(names)} {index}",
        "description": f"{random.choice(descriptions)} {random.choice(categories)} Product",
        "price": round(random.uniform(10.99, 99.99), 2),
        "images": [
            f"{images_base_url}{index}_1.jpg",
            f"{images_base_url}{index}_2.jpg"
        ],
        "discount": random.randint(5, 20),
        "rating": round(random.uniform(1, 5), 1),
        "product_owner": f"Owner {index}",
        "reviews": [
            {
                "reviewer": f"Reviewer {index}",
                "comment": "Really enjoyed this product!",
                "rating": round(random.uniform(1, 5), 1)
            }
        ]
    }

# Generate and upload 16 products
for i in range(1, 17):
    product_data = generate_random_product(i)
    response = requests.post(url, json=product_data)
    print(f'Product {i} Upload Status:', response.status_code)

print("All products uploaded.")
