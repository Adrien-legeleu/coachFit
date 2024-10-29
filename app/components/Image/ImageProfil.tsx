"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@/type/User";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { useState } from "react";

export function ImageProfil({ user }: { user: User | null }) {
  const [imageSelected, setImageSelected] = useState<string>(user?.image ?? "");
  const selectimage = (image: string) => {
    setImageSelected(image);
  };
  return (
    <Dialog>
      <div className="space-y-4">
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 w-[200px] h-[200px] bg-transparent rounded-full"
          >
            <Image
              src={imageSelected}
              alt="image de profil de l'utilisateur"
              width={250}
              height={250}
              className="h-full w-full object-cover rounded-full"
            />
          </Button>
        </DialogTrigger>
      </div>
      <ImageModal
        imageSelected={imageSelected}
        selectimage={selectimage}
        user={user}
      />
    </Dialog>
  );
}
