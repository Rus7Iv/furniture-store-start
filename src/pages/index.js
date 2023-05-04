import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Auth from "@/components/Authentication/Auth";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <h1>Это главная страница!</h1>
        <h2>Здесь будут акции, категории и т.д.</h2>
      </main>
      <Footer />
    </>
  );
}
