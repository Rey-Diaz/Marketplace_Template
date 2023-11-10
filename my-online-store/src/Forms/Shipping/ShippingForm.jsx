// src/components/ShippingForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ShippingForm = ({ onSubmit }) => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(shippingInfo); // Call the onSubmit prop with shipping info
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Full Name:
          <input
            name="fullName"
            type="text"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            name="address"
            type="text"
            value={shippingInfo.address}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            name="city"
            type="text"
            value={shippingInfo.city}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Zip Code:
          <input
            name="zipCode"
            type="text"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Country:
          <input
            name="country"
            type="text"
            value={shippingInfo.country}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit" className="checkout-button">
        Continue to Payment
      </button>
    </form>
  );
};

// Define prop types for the component
ShippingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Indicates onSubmit is a function and is required
};

export default ShippingForm;
