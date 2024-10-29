import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { imagesProfil } from "@/data/imageData";

import Image from "next/image";

interface ImageModal {
  imageSelected: string;
  selectimage: (image: string) => void;
  onSubmit: (imageSelected: string) => void;
}

export default function ImageModal({
  selectimage,
  imageSelected,
  onSubmit,
}: ImageModal) {
  return (
    <DialogContent className="sm:max-w-[525px] max-h-[350px] h-full ">
      <DialogHeader>
        <DialogTitle>Image de profil</DialogTitle>
        <DialogDescription>Choississez votre image de profil</DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-4 gap-4 py-4 overflow-y-scroll">
        {imagesProfil.map((image, idx) => {
          console.log(image);

          return (
            <div>
              <Image
                src={image.src}
                key={`image numéro ${idx}`}
                alt="photo de profil de coachFit"
                width={100}
                height={100}
                className={`rounded-full h-20 w-20 cursor-pointer object-cover ease-out duration-200 ${
                  imageSelected === image.src
                    ? " shadow-lg shadow-orange-500/80 scale-110"
                    : "scale-100"
                }`}
                onClick={() => selectimage(image.src)}
              />
            </div>
          );
        })}
      </div>
      <DialogFooter>
        <Button type="submit" onClick={() => onSubmit(imageSelected)}>
          sauvegarder
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
