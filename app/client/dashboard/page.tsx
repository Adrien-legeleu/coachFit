import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Separator } from "@/components/ui/separator";
import { getAllCoachs } from "@/lib/actionsAllCoachs";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default async function DashboardPage() {
  const allCoachs = await getAllCoachs();

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-20 h-screen overflow-y-auto">
      {allCoachs.map((coach, idx) => {
        const gapTime = Math.floor(
          Math.abs(coach.createdAt.getTime() - new Date().getTime()) /
            3600 /
            24 /
            1000
        );

        return (
          <div key={"coach number : " + idx}>
            <div className="relative p-6 w-full space-y-4 cursor-pointer">
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
                  <div className="space-y-2">
                    {" "}
                    {gapTime < 10 && (
                      <div
                        className={cn(
                          "group rounded-full border-[1px] border-orange-500 bg-orange-200 text-base transition-all ease-in  hover:bg-orange-200/80 dark:border-orange-900 dark:bg-orange-300 brightness-105 dark:hover:bg-orange-300 dark:hover:brightness-100"
                        )}
                      >
                        <AnimatedShinyText className=" text-xs flex items-center justify-center px-3 py-1 transition ease-out text-orange-600 dark:text-orange-700 hover:text-orange-500 hover:duration-300 hover:dark:text-orange-600">
                          <span className="flex items-center justify-center gap-2">
                            <Sparkles className="h-3 w-3" />{" "}
                            <span>Nouveau</span>
                          </span>
                        </AnimatedShinyText>
                      </div>
                    )}
                    {coach.reviews.length > 50 && (
                      <div
                        className={cn(
                          "group rounded-full border-[1px] border-indigo-500 bg-indigo-300/80 text-base transition-all ease-in  hover:bg-indigo-300 dark:border-indigo-900 dark:bg-indigo-300 brightness-105 dark:hover:bg-indigo-300 dark:hover:brightness-100"
                        )}
                      >
                        <AnimatedShinyText className=" text-xs flex items-center justify-center px-3 py-1 transition ease-out text-indigo-600 dark:text-indigo-700 hover:text-indigo-500 hover:duration-300 hover:dark:text-indigo-600">
                          <span className="flex items-center justify-center gap-2">
                            <Sparkles className="h-3 w-3" />{" "}
                            {coach.gender === "female"
                              ? " Ambassadrice"
                              : " Ambassadeur"}
                          </span>
                        </AnimatedShinyText>
                      </div>
                    )}
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
