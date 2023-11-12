
import RegisterForm from '../../Forms/Register/RegisterForm';
import styles from './Register.module.css'; // Import the CSS module

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>Register</div>
                <div className={styles.cardBody}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default Register;
