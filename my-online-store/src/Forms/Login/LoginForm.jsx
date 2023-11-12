import { useState } from 'react';
import styles from './LoginForm.module.css'; // Make sure to create a corresponding CSS module
import PropTypes from 'prop-types'; 

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formField}>
                <label className={styles.label}>Username or Email</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <div className={styles.formField}>
                <label className={styles.label}>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <button type="submit" className={styles.button}>Login</button>
        </form>
    );
};

// Define PropTypes for LoginForm
LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default LoginForm;
