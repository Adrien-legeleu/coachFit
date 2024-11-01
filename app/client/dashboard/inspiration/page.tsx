import Link from "next/link";

export default function PageInspiration() {
  return (
    <div className="p-20 w-full overflow-y-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-center tracking-wider">
          Inspiration
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto">
          Choissisez votre catégorie
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Link
          href="/client/dashboard/inspiration/sport"
          className="bg-red-400 rounded-3xl shadow-xl flex justify-center items-center p-8 h-60 shadow-black/20"
        >
          <h3 className="text-3xl text-neutral-50">Sport</h3>
        </Link>
        <div className="bg-blue-300 rounded-3xl shadow-xl flex justify-center items-center p-8 h-60 shadow-black/20">
          <h3 className="text-3xl text-neutral-50">Yoga</h3>
        </div>
        <div className="bg-green-400 rounded-3xl shadow-xl flex justify-center items-center p-8 h-60 shadow-black/20">
          <h3 className="text-3xl text-neutral-50">Respiration</h3>
        </div>
      </div>
    </div>
  );
}
