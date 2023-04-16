import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styles from "../styles/SingupLogin.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.singup}>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.form_input}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.form_input}
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.form_input} type="submit">
          Войти
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
