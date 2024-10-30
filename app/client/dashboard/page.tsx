import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { getAllCoachs } from "@/lib/actionsAllCoachs";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default async function DashboardPage() {
  const allCoachs = await getAllCoachs();

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-20 h-screen overflow-y-auto">
      {allCoachs.map((coach, idx) => {
        return (
          <div key={"coach number : " + idx}>
            <div className="relative p-6 w-full space-y-4">
              <Image
                src={coach?.image ?? ""}
                width={500}
                height={500}
                alt="image"
                className="w-full shadow-2xl shadow-black/10  dark:shadow-white/10 h-full object-cover rounded-full"
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
                  <p className="text-xs">
                    {coach.note ? coach.note : "pas encore de note"}
                  </p>
                  {/*// rajouter le nombre d'ais et le logo etoile */}
                  <div
                    className={cn(
                      "group rounded-full border border-orange-500/5 bg-orange-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-orange-200 dark:border-white/5 dark:bg-orange-600 dark:hover:bg-orange-500"
                    )}
                  >
                    <AnimatedShinyText className=" text-xs inline-flex items-center justify-center px-3 py-1 transition ease-out text-orange-400 dark:text-orange-300 hover:text-orange-500 hover:duration-300 hover:dark:text-orange-200">
                      <span>✨ Nouveau</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <p className="overflow-hidden  overflow-ellipsis line-clamp-2">
                  {coach.bio}
                </p>
                <p className=" text-muted-foreground font-semibold tracking-wide">
                  {coach.price}€/mois
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
