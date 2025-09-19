import { useState } from "react";
import styles from "../styles/signup.module.css";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Generate random password
  // const generatePassword = () => {
  //   const chars =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  //   let newPassword = "";
  //   for (let i = 0; i < 12; i++) {
  //     newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   setForm({ ...form, password: newPassword, confirm: newPassword });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signup: ${form.username} / ${form.email}`);
  };

  return (
    <div className={styles.home}>
      <div className={styles["signup-box"]}>
        <h2 className={styles["signup-heading"]}>Create an Account</h2>
        <form className='signup-form-1' onSubmit={handleSubmit}>
          <div className={styles["input-field22"]}>
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          <div className={styles["input-field22"]}>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className={`${styles["input-field22"]} ${styles["password-container"]}`}>
            <input
              type="text"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            {/* <button
              type="button"
              className={styles["suggest-btn"]}
              onClick={generatePassword}
            >
              Suggest
            </button> */}
          </div>

          <div className={styles["input-field22"]}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              required
            />
          </div>

          <br />
          <br />
          <button className={styles["signup-button-22"]} type="submit">
            Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;