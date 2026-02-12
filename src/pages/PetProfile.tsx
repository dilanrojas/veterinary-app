import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";

export default function PetProfile() {
  const { id } = useParams<{ id: string }>();
  const { user } = UseUser();
  const [tab, setTab] = useState("Resumen");

  const pet = user?.pets?.find((p) => p.id === Number(id));

  if (!user || !pet) {
    return <div className="p-10 text-center dark:text-white">Cargando...</div>;
  }

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
            <span className="text-emerald-500 text-lg">({pet.type})</span>
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
                  <strong>Raza:</strong> {pet.breed}
                </p>
                <p className="flex justify-between text-sm">
                  <strong>Edad:</strong> {pet.age} años
                </p>
                <p className="flex justify-between text-sm">
                  <strong>Peso:</strong> {pet.weight} kg
                </p>
                <p className="flex justify-between text-sm border-t pt-2 mt-2 font-bold text-emerald-600">
                  <span>Próxima Cita:</span> {user.nextAppointment}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex border-b dark:border-[#2a3a2f] gap-6">
              {["Resumen", "Vacunas", "Consultas"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`pb-2 px-1 text-sm font-bold transition-all ${
                    tab === t
                      ? "border-b-2 border-emerald-500 text-emerald-500"
                      : "text-gray-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-2xl border dark:border-[#2a3a2f] shadow-sm min-h-[300px]">
              {tab === "Resumen" && (
                <div className="space-y-6">
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <p className="font-bold text-emerald-700 dark:text-emerald-400 italic">
                      "La mascota se encuentra en excelente estado físico tras
                      su última revisión."
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">
                      Gráfico de Peso (Histórico)
                    </h3>
                    <div className="h-32 bg-gray-50 dark:bg-[#0a0f0b] rounded-lg flex items-end p-2 gap-2">
                      <div className="bg-emerald-500/40 w-full h-1/2 rounded-t"></div>
                      <div className="bg-emerald-500/60 w-full h-2/3 rounded-t"></div>
                      <div className="bg-emerald-500 w-full h-full rounded-t"></div>
                    </div>
                  </div>
                </div>
              )}

              {tab === "Vacunas" && (
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-[#0a0f0b] rounded-lg">
                    <span className="material-symbols-outlined text-emerald-500">
                      check_circle
                    </span>
                    <div>
                      <p className="font-bold">Rabia</p>
                      <p className="text-xs text-gray-500">
                        Aplicada: 12/01/2026
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-[#0a0f0b] rounded-lg">
                    <span className="material-symbols-outlined text-emerald-500">
                      check_circle
                    </span>
                    <div>
                      <p className="font-bold">Desparasitación</p>
                      <p className="text-xs text-gray-500">
                        Aplicada: 05/02/2026
                      </p>
                    </div>
                  </li>
                </ul>
              )}

              {tab === "Consultas" && (
                <ul className="space-y-4">
                  <li className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="font-bold">Control de Peso</p>
                    <p className="text-sm text-gray-500">
                      20 de Enero - Todo bajo control.
                    </p>
                  </li>
                  <li className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-r-lg">
                    <p className="font-bold">Evaluación de Nutrición</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      15 de Noviembre - Control de peso y ajuste de dieta
                      sugerida.
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
