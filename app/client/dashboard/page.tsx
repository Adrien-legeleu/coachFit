import { getAllCoachs } from "@/lib/actionsAllCoachs";
import Image from "next/image";

export default async function DashboardPage() {
  const allCoachs = await getAllCoachs();

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-20 h-screen overflow-y-auto">
      {allCoachs.map((coach, idx) => {
        return (
          <div key={"coach number : " + idx}>
            <div className="relative p-10 w-full space-y-6">
              <Image
                src={coach?.image ?? ""}
                width={500}
                height={500}
                alt="image"
                className="w-full shadow-2xl shadow-black/10  dark:shadow-white/10 h-full object-cover rounded-full"
              />
              <div className="rounded-3xl bg-neutral-50 p-4">
                <h3>{coach.name}</h3>
                <p>{coach.year_exp}</p>
              </div>
              <div className="rounded-3xl bg-neutral-50 p-4">
                <p>{coach.note ? coach.note : "pas encore de note"}</p>
                {/*// rajouter le nombre d'ais et le logo etoile */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
