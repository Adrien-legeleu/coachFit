"use client";

import SportRandom from "@/app/components/ClientDashboard/Inspiration/Sport/Radnom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { calc } from "antd/es/theme/internal";

// Importer la fonction

export default function PageSport() {
  return (
    <div className="p-20 w-full overflow-y-auto">
      <h1>Type d'exercices</h1>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Dialog>
          <div className="bg-red-400 rounded-3xl shadow-xl flex justify-center items-center p-8  shadow-black/20">
            <DialogTrigger asChild>
              <h3 className="text-3xl text-neutral-50">Aléatoire</h3>
            </DialogTrigger>
          </div>
          <DialogContent
            className="sm:max-w-[825px] overflow-y-auto"
            style={{ height: "calc(100vh - 80px)" }}
          >
            <SportRandom />
          </DialogContent>
        </Dialog>
        <div className="bg-blue-300 rounded-3xl shadow-xl flex justify-center items-center p-8 h-60 shadow-black/20">
          <h3 className="text-3xl text-neutral-50">jambes</h3>
        </div>
        <div className="bg-green-400 rounded-3xl shadow-xl flex justify-center items-center p-8 h-60 shadow-black/20">
          <h3 className="text-3xl text-neutral-50">bras</h3>
        </div>
      </div>
    </div>
  );
}
