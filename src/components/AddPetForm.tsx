import { UseUser } from "../contexts/UserContext";
import { UseUI } from "../contexts/UIContext";
import { Close } from "../assets/icons";
import type { Pet } from "../lib/types";
import { useState } from "react";

export default function AddPetForm() {
  const [error, setError] = useState<boolean>(false);
  const { user, setUser } = UseUser();
  const { setAdding } = UseUI();

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const handleAdd = () => {
    const id = Math.floor(1000 + Math.random() * 9000);
    const petAge = Number(age);
    const petWeight = Number(weight);

    if (!name || !type || !breed || !age || !weight) {
      setError(true);
      return;
    }

    const newPet: Pet = {
      id: id,
      name: name,
      type: type,
      breed: breed,
      age: petAge,
      weight: petWeight,
      imageUrl: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400",
    };

    if (user) {
      const updatedUser = {
        ...user,
        pets: [...user.pets, newPet]
      };

      setUser(updatedUser);
      setAdding(false);
    }
  };

  return (
    <div className="fixed inset-0 px-4 py-6 flex items-center justify-center bg-black/40 z-50 overflow-y-auto no-scroll">
      {/* Modal Container */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl w-full max-w-lg flex flex-col max-h-[90vh]">

        {/* Header - Fixed at top of modal */}
        <header className="flex items-center justify-between w-full p-5 md:px-10 border-b dark:border-slate-800">
          <h1 className="text-xl font-bold dark:text-white">Adding Pet</h1>
          <button
            onClick={() => setAdding(false)}
            className="flex items-center rounded-lg text-background-dark hover:bg-gray-100 dark:hover:bg-slate-800 p-2 transition-all"
          >
            <Close size={24} />
          </button>
        </header>

        {/* Scrollable Form Body */}
        <form
          className="flex-1 overflow-y-auto p-5 md:px-10"
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <div className="flex flex-col gap-4">
            {/* Pet Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#111813] dark:text-white">
                Pet Name
              </label>
              <input
                className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="Buddy"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#111813] dark:text-white">
                Type
              </label>
              <input
                className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="Dog"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            {/* Breed */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#111813] dark:text-white">
                Breed
              </label>
              <input
                className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="Golden Retriever"
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>

            {/* Age & Weight Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm font-bold text-[#111813] dark:text-white">
                  Age
                </label>
                <input
                  className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm font-bold text-[#111813] dark:text-white">
                  Weight (kg)
                </label>
                <input
                  className="h-12 w-full rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-primary focus:border-primary transition-all px-4"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Footer - Inside scroll or move outside if you want it sticky */}
          <footer className="flex items-center gap-x-2 mt-8 pb-4 relative">
            {error && (
              <span className="text-red-500 absolute -top-6 text-xs font-medium">
                Missing required fields
              </span>
            )}
            <button
              onClick={() => setAdding(false)}
              type="button"
              className="flex-1 py-3 rounded-lg bg-gray-200 dark:bg-slate-700 text-sm font-bold hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg bg-primary text-sm font-bold text-white hover:brightness-110 transition-all"
            >
              Add Pet
            </button>
          </footer>
        </form>
      </div>
    </div>);
}
