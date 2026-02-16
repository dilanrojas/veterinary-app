import { Link } from "react-router-dom";
import type { Pet } from "../lib/types";

export default function PetCard(props: Pet & { nextAppointment: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-emerald-900/10 border border-[#dbe6df] dark:border-emerald-900/30 hover:shadow-xl transition-all group cursor-pointer">
      <div
        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover relative"
        style={{ backgroundImage: `url("${props.imageUrl}")` }}
      >
        <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {props.type}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[#111813] dark:text-white text-xl font-bold leading-tight">{props.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 dark:bg-background-dark/50">
          <span className="material-symbols-outlined text-emerald-600 text-sm">calendar_month</span>
          <p className="text-[#111813] dark:text-gray-300 text-xs font-semibold">
            Appt: {props.nextAppointment}
          </p>
        </div>
        <Link to={`/petlist/${props.id}`} >
          <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-sm font-bold text-white hover:bg-emerald-600 transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
