
import styles from './PaymentComplete.module.css'; // Import the CSS module

const PaymentComplete = () => {
    return (
        <div className={styles.paymentCompleteContainer}>
            <div className={styles.card}> {/* Apply the card class */}
                <h1>Payment Successful</h1>
                <p>Your payment was processed successfully. Thank you for your purchase!</p>
                <a href="/">Return to Home</a>
            </div>
        </div>
    );
}

export default PaymentComplete;
