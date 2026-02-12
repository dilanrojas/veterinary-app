import { Link } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";

export default function PetList() {
  const { user } = UseUser();

  if (!user) {
    return <div className="p-10 text-center dark:text-white">Loading user data...</div>;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          
          <main className="flex flex-1 justify-center py-8">
            <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1 px-4 md:px-10">
              
              <div className="flex flex-wrap items-end justify-between gap-4 p-4 mb-4">
                <div className="flex min-w-72 flex-col gap-2">
                  <h1 className="text-[#111813] dark:text-white text-4xl font-black leading-tight tracking-tight">
                    My Pets
                  </h1>
                  <p className="text-[#61896f] dark:text-emerald-500/80 text-base font-normal">
                    Hello, {user.fullname}! You have {user.pets?.length} registered {user.pets?.length === 1 ? 'pet' : 'pets'}.
                  </p>
                </div>
              </div>

              {/* Pet Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {user.pets?.map((pet) => (
                  <div key={pet.id} className="flex flex-col overflow-hidden rounded-xl bg-white dark:bg-emerald-900/10 border border-[#dbe6df] dark:border-emerald-900/30 hover:shadow-xl transition-all group cursor-pointer">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover relative" 
                      style={{ backgroundImage: `url("${pet.imageUrl}")` }}
                    >
                      <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        {pet.type}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[#111813] dark:text-white text-xl font-bold leading-tight">{pet.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 dark:bg-background-dark/50">
                        <span className="material-symbols-outlined text-emerald-600 text-sm">calendar_month</span>
                        <p className="text-[#111813] dark:text-gray-300 text-xs font-semibold">
                          Appt: {user.nextAppointment}
                        </p>
                      </div>
                      <Link to={`/petprofile/${pet.id}`} >
                        <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-sm font-bold text-white hover:bg-emerald-600 transition-all">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}