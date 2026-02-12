import { useParams, Link } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";

export default function PetProfile() {
  const { id } = useParams<{ id: string }>();
  const { user } = UseUser();

  const pet = user?.pets?.find((p) => p.id === Number(id));

  if (!user) {
    return <div className="p-10 text-center dark:text-white">Cargando usuario...</div>;
  }

  if (!pet) {
    return (
      <div className="p-10 text-center dark:text-white">
        <p className="mb-4">Mascota no encontrada.</p>
        <Link to="/" className="text-emerald-500 underline">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111813] dark:text-white font-sans">
 

      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8">
        {/* Breadcrumbs dinámicos */}
        <nav className="flex flex-wrap gap-2 mb-6 items-center">
          <Link className="text-[#61896f] hover:text-emerald-500 text-sm font-medium" to="/">Mis Mascotas</Link>
          <span className="material-symbols-outlined text-sm text-[#61896f]">chevron_right</span>
          <span className="text-[#111813] dark:text-white text-sm font-bold capitalize">{pet.name} - {pet.type}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Izquierdo: Datos de la Mascota */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a3a2f] shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 border-4 border-emerald-500/20" 
                    style={{ backgroundImage: `url("${pet.imageUrl}")` }}
                  />
                  <div className="absolute bottom-0 right-2 bg-emerald-500 text-white rounded-full p-1 border-2 border-white dark:border-[#152a1c]">
                    <span className="material-symbols-outlined text-lg font-bold">check</span>
                  </div>
                </div>
                <h1 className="text-[#111813] dark:text-white text-3xl font-extrabold mt-4 tracking-tight">{pet.name}</h1>
                <p className="text-[#61896f] text-base font-medium capitalize">{pet.type} • Paciente Activo</p>
                
                <div className="w-full mt-6 flex flex-col gap-3">
                  <Link to = "/petlist">
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined"></span>
                    Volver
                  </button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#dbe6df] dark:border-[#2a3a2f] space-y-4">
                <div className="flex items-center justify-between">
                    </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#61896f] text-sm">Dueño</span>
                  <span className="text-[#111813] dark:text-white text-sm">{user.fullname}</span>
                </div>
              </div>
            </div>

            {/* Información Médica Rápida */}
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a3a2f] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-emerald-500">medical_services</span>
                <h3 className="text-lg font-bold">Resumen Médico</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-[#1a3222] rounded-lg">
                  <p className="text-xs text-[#61896f] uppercase font-bold mb-1">Próxima Visita</p>
                  <p className="text-sm font-semibold">{user.nextAppointment}</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Área Principal: Historial y Stats */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-6 bg-emerald-500 text-white shadow-sm">
                <p className="opacity-80 text-sm font-bold uppercase">Estado Actual</p>
                <p className="text-3xl font-black mt-1">Saludable</p>
                <div className="flex items-center gap-1 mt-2 text-sm font-medium">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Chequeo al día
                </div>
              </div>
              <div className="rounded-xl p-6 bg-white dark:bg-[#152a1c] border border-[#dbe6df] dark:border-[#2a3a2f] shadow-sm">
                <p className="text-[#61896f] text-sm font-bold uppercase">Última Vacuna</p>
                <p className="text-[#111813] dark:text-white text-3xl font-black mt-1">Oct 2025</p>
              </div>
            </div>

            {/* Gráfico de Peso Representativo */}
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a3a2f] shadow-sm">
              <h2 className="text-[#111813] dark:text-white text-xl font-bold mb-6">Seguimiento de Peso</h2>
              <div className="h-40 w-full relative flex items-end">
                 <svg className="w-full h-full text-emerald-500" preserveAspectRatio="none" viewBox="0 0 400 100">
                    <path d="M0,80 Q50,60 100,70 T200,40 T300,50 T400,30" fill="none" stroke="currentColor" strokeWidth="3" />
                 </svg>
              </div>
            </div>

            {/* Medical History List */}
            <div className="bg-white dark:bg-[#152a1c] rounded-xl border border-[#dbe6df] dark:border-[#2a3a2f] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#dbe6df] dark:border-[#2a3a2f]">
                <h2 className="text-[#111813] dark:text-white text-xl font-bold">Historial de Visitas</h2>
              </div>
              <div className="divide-y divide-[#dbe6df] dark:divide-[#2a3a2f]">
                <div className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-emerald-500/5 transition-colors">
                  <div className="flex gap-4 items-center">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 p-2 rounded-lg">
                      <span className="material-symbols-outlined">vaccines</span>
                    </div>
                    <div>
                      <p className="font-bold">Vacunación Anual</p>
                      <p className="text-xs text-[#61896f]">Completado hace 4 meses</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400">description</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}