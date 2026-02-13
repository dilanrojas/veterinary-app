import { UseUser } from "../contexts/UserContext";
import { UseUI } from "../contexts/UIContext";
import { Plus } from "../assets/icons";
import PetCard from "../components/PetCard";
import AddPetForm from "../components/AddPetForm";

export default function PetList() {
  const { user } = UseUser();
  const { adding, setAdding } = UseUI();

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
                <header className="flex w-full gap-2 justify-between items-center">
                  <div>
                    <h1 className="text-[#111813] dark:text-white text-4xl font-black leading-tight tracking-tight mb-2">
                      My Pets
                    </h1>
                    <p className="text-[#61896f] dark:text-emerald-500/80 text-base font-normal">
                      Hello, {user.fullname}! You have {user.pets?.length} registered {user.pets?.length === 1 ? 'pet' : 'pets'}.
                    </p>
                  </div>
                  <button className="flex items-center h-fit py-3.5 gap-x-3 rounded-lg bg-primary px-5 text-sm font-bold text-background-dark hover:brightness-110 transition-all" onClick={() => setAdding(true)}>
                    <span>{<Plus size={20} />}</span>
                    Add pet
                  </button>
                </header>
              </div>

              {/* Pet Cards */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {user.pets?.map((pet) => (
                  <li key={pet.id}>
                    <PetCard
                      {...pet}
                      nextAppointment={user.nextAppointment}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>

      {adding && <AddPetForm />}
    </div>
  );
}
