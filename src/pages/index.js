import Signup from "../components/Singup";
import Login from "../components/Login";
import Account from "../components/Account";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Jumbotron } from "react-bootstrap";
import Banner from "@/components/Banner";
import Auth from "@/components/Auth";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}

      <Navigation />
      <main>
        {/* <Signup />
        <Login />
        <Account /> */}
        <Auth />
      </main>
      <Footer />
    </>
  );
}
