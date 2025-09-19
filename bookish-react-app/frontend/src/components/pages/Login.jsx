import { useState } from "react";
import styles from "../styles/login.module.css";
import bg from "../images/bg.png";

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
    <div
      className={styles.home}
      style={{ backgroundImage: `url(${bg})` }}>

      <div className={styles["sign-box"]}>
        <h2 className={styles["login-heading"]}>
          Welcome back! <br />
        </h2>

        <form onSubmit={handleSubmit}>
          <div className={styles["input-field"]}>
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username or email"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>

          <div className={styles["input-field"]}>
            <label htmlFor="password">Password</label>
            <div className={styles["password-wrapper"]}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className={styles["toggle-password"]}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <label className={styles.remember}>
            <input type="checkbox" /> Remember me
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={styles.btn}
            type="submit"
            disabled={!form.username || !form.password || loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* ✅ links are inside the card */}
        <a href="#" className={styles.forgot}>
          Forgot password?
        </a>

        <div className={styles["signup-link"]}>
          Don’t have an account? <a href="/signup">Create one</a>
        </div>
      </div>
    </div>
  );
}

export default Login;