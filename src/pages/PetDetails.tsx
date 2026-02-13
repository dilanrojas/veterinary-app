import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";
import { MinusCircle } from "../assets/icons";
import { type Pet } from "../lib/types";
import { getPetById } from "../services/clients.service";

export default function PetDetails() {
  const { id } = useParams<{ id: string }>();
  const { user, setUser } = UseUser();
  const [tab, setTab] = useState("Summary");
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const petId = id ? Number(id) : NaN;

    if (isNaN(petId)) {
      setLoading(false);
      return;
    }

    getPetById(petId).then((foundPet) => {
      if (foundPet) {
        setPet(foundPet);
        setLoading(false);
      } else if (user) {
        const localPet = user.pets.find((p) => p.id === petId);
        setPet(localPet || null);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [id, user]);

  if (loading) {
    <div className="min-h-dvh flex items-center justify-center">
      <p>Loading...</p>;
    </div>
  }

  if (!user) {
    return;
  }

  if (!pet) {
    return;
  }

  const handleRemove = () => {
    const confirmation = confirm(`Do you want to remove ${pet.name} from the list?`);

    if (!confirmation) return;

    if (!pet) return;

    setUser((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        pets: prev.pets.filter((p) => p.id !== pet.id),
      };
    });

    navigate("/petlist");
  };
  return (
    <div className="bg-gray-50 dark:bg-[#0a0f0b] min-h-screen text-[#111813] dark:text-white p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/petlist"
            className="bg-white dark:bg-[#152a1c] p-2 rounded-full shadow-sm border dark:border-[#2a3a2f]"
          >
            <span className="material-symbols-outlined block">arrow_back</span>
          </Link>
          <h1 className="text-3xl font-black">
            {pet.name}{" "}
            <span className="text-emerald-500 text-lg capitalize">({pet.type})</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-2xl border dark:border-[#2a3a2f] text-center shadow-sm">
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-emerald-500/20 mb-4"
              />
              <div className="text-left space-y-3 mt-6">
                <p className="flex justify-between text-sm">
                  <strong>Breed:</strong> {pet.breed}
                </p>
                <p className="flex justify-between text-sm">
                  <strong>Age:</strong> {pet.age} {pet.age === 1 ? 'year' : 'years'}
                </p>
                <p className="flex justify-between text-sm">
                  <strong>Weight:</strong> {pet.weight} kg
                </p>
                <p className="flex justify-between text-sm border-t pt-2 mt-2 font-bold text-emerald-600">
                  <span>Next Appt:</span> {user.nextAppointment}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex border-b dark:border-[#2a3a2f] gap-6">
              {["Summary", "Vaccines", "Visits"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`pb-2 px-1 text-sm font-bold transition-all ${tab === t
                    ? "border-b-2 border-emerald-500 text-emerald-500"
                    : "text-gray-400"
                    }`}
                >
                  {t}
                </button>
              ))}
              <button
                className="text-sm font-bold transition-all pb-2 ml-auto flex items-center gap-x-1 text-red-500 hover:text-red-300"
                onClick={handleRemove}
              >
                <span><MinusCircle size={18} /></span>
                Remove
              </button>
            </div>

            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-2xl border dark:border-[#2a3a2f] shadow-sm min-h-[300px]">
              {tab === "Summary" && (
                <div className="space-y-6">
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 italic">
                      "The pet is in excellent physical condition following
                      the last check-up."
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">
                      Weight Chart (History)
                    </h3>
                    <div className="h-32 bg-gray-50 dark:bg-[#0a0f0b] rounded-lg flex items-end p-2 gap-2">
                      <div className="bg-emerald-500/40 w-full h-1/2 rounded-t"></div>
                      <div className="bg-emerald-500/60 w-full h-2/3 rounded-t"></div>
                      <div className="bg-emerald-500 w-full h-full rounded-t"></div>
                    </div>
                  </div>
                </div>
              )}

              {tab === "Vaccines" && (
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-[#0a0f0b] rounded-lg">
                    <span className="material-symbols-outlined text-emerald-500">
                      check_circle
                    </span>
                    <div>
                      <p className="font-bold">Rabies</p>
                      <p className="text-xs text-gray-500">
                        Applied: Jan 12, 2026
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-[#0a0f0b] rounded-lg">
                    <span className="material-symbols-outlined text-emerald-500">
                      check_circle
                    </span>
                    <div>
                      <p className="font-bold">Deworming</p>
                      <p className="text-xs text-gray-500">
                        Applied: Feb 05, 2026
                      </p>
                    </div>
                  </li>
                </ul>
              )}

              {tab === "Visits" && (
                <ul className="space-y-4">
                  <li className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="font-bold">Weight Control</p>
                    <p className="text-sm text-gray-500">
                      January 20 - Everything under control.
                    </p>
                  </li>
                  <li className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-r-lg">
                    <p className="font-bold">Nutrition Assessment</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      November 15 - Weight control and suggested diet
                      adjustment.
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
