import React, { useState, useEffect } from "react";
import { UseUser } from "../contexts/UserContext";
import { type Client } from "../lib/types";

export default function SettingsPage() {
  const { user, setUser } = UseUser();

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname || "",
        username: user.username || "",
        password: (user as any).password || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!user) return;

    const updatedUser: Client = {
      ...user,
      ...formData,
    };

    setUser(updatedUser);
    alert("Cambios guardados correctamente en LocalStorage");
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0f0b] text-[#111813] dark:text-white antialiased">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black tracking-tight">
                Configuración del Perfil
              </h1>
              <p className="text-[#61896f] max-w-lg">
                Actualiza tu información personal y credenciales de acceso.
              </p>
            </div>
            <button
              onClick={handleSave}
              className="bg-[#4ade80] text-[#111813] px-6 py-3 rounded-lg font-bold text-sm shadow-sm hover:opacity-90 transition-opacity"
            >
              Guardar todos los cambios
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white dark:bg-[#152a1c] p-8 rounded-xl border border-[#dbe6df] dark:border-[#2a3a2e] shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#4ade80]">
                  person
                </span>
                <h2 className="text-xl font-bold">Información de la Cuenta</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs nativos */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold opacity-80">
                    Nombre Completo
                  </span>
                  <input
                    name="fullname"
                    type="text"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-[#dbe6df] dark:border-[#2a3a2e] bg-gray-50 dark:bg-[#102216] focus:ring-2 focus:ring-[#4ade80] outline-none px-4 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold opacity-80">
                    Nombre de Usuario
                  </span>
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-[#dbe6df] dark:border-[#2a3a2e] bg-gray-50 dark:bg-[#102216] focus:ring-2 focus:ring-[#4ade80] outline-none px-4 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold opacity-80">
                    Correo Electrónico
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-[#dbe6df] dark:border-[#2a3a2e] bg-gray-50 dark:bg-[#102216] focus:ring-2 focus:ring-[#4ade80] outline-none px-4 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold opacity-80">Teléfono</span>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-[#dbe6df] dark:border-[#2a3a2e] bg-gray-50 dark:bg-[#102216] focus:ring-2 focus:ring-[#4ade80] outline-none px-4 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-bold opacity-80">
                    Contraseña
                  </span>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border-[#dbe6df] dark:border-[#2a3a2e] bg-gray-50 dark:bg-[#102216] focus:ring-2 focus:ring-[#4ade80] outline-none px-4 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
