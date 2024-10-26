import { getAuthSession } from "@/lib/auth";
import { Footer } from "./components/Footer/Footer";
import { HomeNotice } from "./components/Home/HomeNotice";
import { HomePage } from "./components/Home/HomePage";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/actionsUser";

export default async function Home() {
  const session = await getAuthSession();

  if (session) {
    const user = await getUser();
    if (user.speciality) {
      redirect("/dashboard");
    } else {
      redirect("/information/user");
    }
  }

  return (
    <div>
      <HomePage />
      <HomeNotice />
      <Footer />
    </div>
  );
}
