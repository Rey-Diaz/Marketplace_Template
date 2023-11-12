import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RegisterForm.module.css'; // Import the CSS module

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formField}>
                <label className={styles.label}>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <div className={styles.formField}>
                <label className={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
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
            <div className={styles.formField}>
                <label className={styles.label}>Confirm Password</label>
                <input
                    type="confirmpassword"
                    name="confirmpassword"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <button type="submit" className={styles.button}>Register</button>
        </form>
    );
};

RegisterForm.propTypes = {
    onRegister: PropTypes.func.isRequired // Specify that onRegister is a required function
};

export default RegisterForm;
