import Badge from "@/app/components/ClientDashboard/Accueil/Badge";
import { getAllCoachs } from "@/lib/actionsAllCoachs";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardPage() {
  const allCoachs = await getAllCoachs();

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-20 h-screen overflow-y-auto">
      {allCoachs.map((coach, idx) => {
        return (
          <div key={"coach number : " + idx}>
            <Link
              className="relative p-6 w-full inline-block space-y-4 cursor-pointer"
              href={`/client/dashboard/${coach.id}`}
            >
              <Image
                src={coach?.image ?? ""}
                width={500}
                height={500}
                alt="image"
                className="w-full shadow-2xl shadow-black/10   dark:shadow-white/10 h-full object-cover rounded-full"
              />
              <div className="rounded-3xl bg-neutral-50 dark:bg-neutral-800 brightness-125 p-4">
                <h3 className="text-lg font-bold tracking-wide">
                  {coach.name}
                </h3>
                <p className="capitalize text-muted-foreground">
                  {coach.year_exp}
                </p>
              </div>
              <div className="rounded-3xl space-y-2 bg-neutral-50 dark:bg-neutral-800 brightness-125 p-4">
                <div className="flex justify-between items-center gap-5">
                  {coach.note ? (
                    <p className="text-xs">
                      <IconStarFilled className="h-2 w-2 text-yellow-400" />
                      {coach.note}{" "}
                      <span className="ml-4">({coach.reviews.length})</span>
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Pas encore de note
                    </p>
                  )}
                  {/*// rajouter le nombre d'ais et le logo etoile */}
                  <Badge coach={coach} />
                </div>
                <p className="overflow-hidden  overflow-ellipsis line-clamp-2">
                  {coach.bio}
                </p>
                <p className=" text-muted-foreground font-semibold tracking-wide">
                  {coach.price}€/mois
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
