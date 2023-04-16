import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Личный кабинет</h1>
          <p>Привет, {user.email}</p>
          <button onClick={handleLogout}>Выйти</button>
        </>
      ) : (
        <p>Пожалуйста, войдите или зарегистрируйтесь</p>
      )}
    </div>
  );
};

export default Account;
