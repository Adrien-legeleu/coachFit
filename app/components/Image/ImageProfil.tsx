"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Avatar1 from "@/public/image/profil/avataaars.png";

import Image from "next/image";
import ImageModal from "./ImageModal";
import { useState } from "react";

interface ImageProfilProps {
  image: string;
  onSubmit: (imageSelected: string) => void;
}

export function ImageProfil({ image, onSubmit }: ImageProfilProps) {
  const [imageSelected, setImageSelected] = useState<string>(image ?? "");
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
              src={imageSelected ? imageSelected : Avatar1}
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
        onSubmit={onSubmit}
      />
    </Dialog>
  );
}
