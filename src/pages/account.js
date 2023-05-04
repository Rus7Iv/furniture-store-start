import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Auth from "@/components/Authentication/Auth";

export default function Account() {
  return (
    <>
      <Navigation />
      <main>
        <Auth />
      </main>
      <Footer />
    </>
  );
}
