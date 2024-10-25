import { getAuthSession } from "@/lib/auth";
import { Footer } from "./components/Footer/Footer";
import { HomeNotice } from "./components/Home/HomeNotice";
import { HomePage } from "./components/Home/HomePage";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div>
      <HomePage />
      <HomeNotice />
      <Footer />
    </div>
  );
}
