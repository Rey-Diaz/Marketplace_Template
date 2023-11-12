import styles from './PaymentError.module.css'; // Import the CSS module

const PaymentError = () => {
    return (
        <div className={styles.paymentErrorContainer}>
            <div className={styles.card}> {/* Apply the card class */}
                <h1>Error Processing Payment</h1>
                <p>There was an error processing your payment. Please try again later or contact support.</p>
                <a href="/">Return to Home</a>
            </div>
        </div>
    );
}

export default PaymentError;