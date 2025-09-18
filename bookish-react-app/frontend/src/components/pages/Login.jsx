import { useState } from "react";
import styles from "../styles/login.module.css";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }
      const data = await response.json();
      console.log("✅ Login success:", data);
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["signup-box"]}>
      <h2 className={styles["signup-heading"]}>
        Welcome back! Your next chapter is waiting for you! <br /> Sign in!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-field"]}>
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username or email"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>

        <div className={styles["input-field"]}>
          <label htmlFor="password">Password</label>
          <div className={styles["password-container"]}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className={styles["toggle-btn"]}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <label>
          <input type="checkbox" /> Remember me
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button 
          type="submit"
          disabled={!form.username || !form.password || loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <a href="#" className={styles.forgot}>
        Forgot password?
      </a>
      <br />
      <br />
      <div className={styles["signup-link"]}>
        Don’t have an account? <a href="/signup">Create one</a>
      </div>
    </div>

  );
}

export default Login;
