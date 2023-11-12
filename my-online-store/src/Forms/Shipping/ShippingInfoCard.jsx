import { useState } from 'react';
import PropTypes from 'prop-types';
import BillingInfoCard from '../Billing/BillingInfoCard';
import styles from './ShippingInfoCard.module.css';

const ShippingInfoCard = ({ onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process shipping information
    setSubmitted(true); // On submission, display the billing info form
    onSubmitted(); // Call the passed callback function to update parent state
  };

  if (submitted) {
    return <BillingInfoCard />;
  }

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formField}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.label}>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.label}>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.label}>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.label}>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

ShippingInfoCard.propTypes = {
  onSubmitted: PropTypes.func.isRequired,
};

export default ShippingInfoCard;
