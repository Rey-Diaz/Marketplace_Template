
import styles from './BillingInfoCard.module.css'; 
import PaymentForm from '../../components/Payment/Payment'; // Import the PaymentForm

const BillingInfoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.formContainer}>
        <PaymentForm /> {/* Include the Payment Form here */}
      </div>
    </div>
  );
};

export default BillingInfoCard;
