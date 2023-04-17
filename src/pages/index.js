import Signup from "../components/Singup";
import Login from "../components/Login";
import Account from "../components/Account";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Signup />
        <Login />
        <Account />
      </main>
      <Footer />
    </>
  );
}
