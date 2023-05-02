import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Singup";

const Auth = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedValue =
      typeof window !== "undefined" && localStorage.getItem("isAuthenticated");
    return storedValue !== null ? storedValue === "true" : false;
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const handleSuccessfulAuth = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <button onClick={() => setShowSignup(false)}>Вход</button>
          <button onClick={() => setShowSignup(true)}>Регистрация</button>
        </div>
      )}
      {showSignup ? (
        <Signup onSuccessfulAuth={handleSuccessfulAuth} />
      ) : (
        <Login onSuccessfulAuth={handleSuccessfulAuth} />
      )}
      {isAuthenticated && (
        <div>
          <p>Вы авторизованы!</p>
          <button onClick={handleLogout}>Выход</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
