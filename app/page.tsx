import { Footer } from "./components/Footer/Footer";
import { HomeNotice } from "./components/Home/HomeNotice";
import { HomePage } from "./components/Home/HomePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <HomeNotice />
      <Footer />
    </div>
  );
}
