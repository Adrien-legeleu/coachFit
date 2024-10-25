"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <div>
      <Button onClick={() => signIn()}>Se connecter</Button>
    </div>
  );
};
