// src/components/ShippingForm.jsx


const ShippingForm = () => {
  return (
    <div className="payment-form">
      <h2>Shipping Information</h2>
      {/* Add input fields for shipping information (e.g., name, address, etc.) */}
      <label htmlFor="shippingName">Shipping Name:</label>
      <input type="text" id="shippingName" />

      <label htmlFor="shippingAddress">Shipping Address:</label>
      <input type="text" id="shippingAddress" />

      {/* Add other shipping information fields as needed */}
    </div>
  );
};

export default ShippingForm;
