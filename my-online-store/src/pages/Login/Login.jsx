
import LoginForm from '../../Forms/Login/LoginForm';
import styles from './Login.module.css'; // Import the CSS module

const Login = () => {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>Login</div>
                <div className={styles.cardBody}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
