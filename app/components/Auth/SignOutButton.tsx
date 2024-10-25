"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <Button onClick={() => signOut({ callbackUrl: "/" })}>
        Se déconnecter
      </Button>
    </div>
  );
};
