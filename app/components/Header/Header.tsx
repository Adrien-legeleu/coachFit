import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Logo from "@/app/Logo.svg";
import { SignInButton } from "../Auth/SignInButton";
import { SignOutButton } from "../Auth/SignOutButton";
import { getAuthSession } from "@/lib/auth";

export default async function Header() {
  const session = await getAuthSession();
  return (
    <div className="w-full flex justify-between p-6 bg-transparent absolute top-0 left-0 z-50">
      <span className="flex items-center justify-center text-3xl font-bold tracking-wide gap-2">
        <Image
          src={Logo}
          width={30}
          height={30}
          alt="logo de coachFit"
          className="h-10 w-10 object-cover"
        />
        CoachFit{" "}
      </span>
      <div className="flex items-center justify-center gap-6">
        {session ? <SignOutButton /> : <SignInButton />}
        <ModeToggle />
      </div>
    </div>
  );
}
