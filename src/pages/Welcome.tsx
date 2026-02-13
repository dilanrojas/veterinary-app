import { Link } from "react-router-dom";
import { UseUser } from "../contexts/UserContext";

export default function Welcome() {
  const { user } = UseUser();

  return (
    <main className="flex-grow">
      {/* HeroSection */}
      <section className="mx-auto max-w-[1280px] px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:text-primary">
                Expert Veterinary Care
              </span>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Compassionate Care for Your Best Friends
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                A comprehensive veterinary management clinic providing
                world-class care for your pets. Over 15 years of experience with
                certified specialists dedicated to your pet's wellbeing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to={user ? '/home' : '/authlogin'}>
                <button className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                  Book Appointment
                </button>
              </Link>
              <a href="/#services">
                <button className="flex items-center gap-2 rounded-xl border-2 border-[#dbe6df] px-8 py-4 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  View Services
                </button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-square w-full rounded-2xl bg-center bg-cover shadow-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAADzubtWcSnE1CRBptTyzkzEXXrHsR3MtSsJDT1b--3RKYxZ_nruwU6EAo97BhlsE-SGqXuiNSWYBMTq75ak1sgaqxKJLDzycvWfflQeC5nRiim9KAt3WYDz_-RelQu-yt-ciOldZhDthl0JhePmpq3E28G05ck1QmWU-CCysGUjzaRChLoccr-98u4oNDSAvA02zyp6dpCUlv6m677hj2Giplve3fY_0sHYYA-U6wgL4oTvMxN4yrymqXhQC7JKlvno6FGps6mM')",
              }}
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl border border-[#dbe6df] dark:border-slate-700 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYoDBOHNlJABaKhFXR4x23oFC8vh6FDHPF75Obmf7cZi4hPLejG6ReR-N9eYsSl77m4guxpyPp2MaJMpAqB6rl9iOqCEWOBkxmI85MNv_wWzbRJU99H7z63TFB_fzHpCvRz6_NsSU8cSs5DrXIT_VfYHliT6jh7qP07QApHUWA6BXGUE9uZ6qBtOoHdVXWJkoeF3Zag1CghjFpHc30TULroglCa87d4TiequS7P-_SORbZhiN_8SDgg5g_JKuqAV5mHsgjI_ajGJs')",
                      backgroundSize: "cover",
                    }}
                  />
                  <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMArdtSXNz_2ljTWWB1KQYKj5fLT3Qj63bFT3jT88YhyiXXHgH-nVAOWBi5C7eKDD0k274we8mNASsqFplm5sTRr4I14zSOVRNhVnSiNOHE9JrysLyL1oMp2Gw4U0zr-uIeV7dr73t1KVuRXoL3f4L5gTn6o21LyoaQl7LofhQTsUgbLbQDVRglu2kiBRG9lLHOW8LZmk7JBOQRk-e0a4CTFrjwpo3a-vlK6Np1ofUDf7ay02xJxDV4qJgeUrHXL4TAuQtiuovO24')",
                      backgroundSize: "cover",
                    }}
                  />
                  <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDVr3EgRRDV5-K1hnGv6Fu02RlTqK7P5rpLKDfA57eGOoomU1RfktVEknbHxMcUHSjH9ediHtbQiMdR5UKM_X_Efu0klOwfN5gwfDiI2KK9muAe04JbR5ZToFR3bpHQkvpWaMrvJPDVV22DsCZ1Rhb-jZbE7BUXcRIQrlXE5vfmto3D98iYuR2ZCqzRHHYbL6dCz5NaZfLm4hQqoNaPlrNaESCjOXuldqgevP0gLrEb6pGKLpUc_cNfd-Z4g_UBGANgMxTVSmZEi0')",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">5,000+ Happy Pets</p>
                  <div className="flex text-yellow-400">
                    <span className="material-symbols-outlined !text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined !text-sm">
                      star
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Hours Section */}
      <section className="bg-soft-blue/30 dark:bg-white/5 py-12">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-6 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-[#dbe6df] dark:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Mon - Fri</p>
                <p className="text-2xl font-extrabold">8am - 6pm</p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-[#dbe6df] dark:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">event</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Saturday</p>
                <p className="text-2xl font-extrabold">9am - 2pm</p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-[#dbe6df] dark:border-slate-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500">
                <span className="material-symbols-outlined">
                  emergency_home
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Sunday</p>
                <p className="text-2xl font-extrabold text-red-500">
                  Emergency Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FeatureSection */}
      <section className="mx-auto max-w-[1280px] px-6 py-20" id="services">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            Care Tailored to Your Pet's Needs
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">
            We offer a wide range of medical and wellness services to ensure
            your furry friends stay healthy, active, and happy throughout their
            lives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:border-primary transition-all hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">
                medical_services
              </span>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">General Checkups</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Regular wellness exams and preventative diagnostics to catch
                issues early.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:border-primary transition-all hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">e911_emergency</span>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Emergency Care</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Rapid response and advanced life support for critical situations
                24/7.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:border-primary transition-all hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">content_cut</span>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Pet Grooming</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Professional styling, therapeutic baths, and skin maintenance
                services.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group flex flex-col gap-4 rounded-2xl border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:border-primary transition-all hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined">vaccines</span>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Vaccinations</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Essential immunization programs tailored to your pet's age and
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Contact Section */}
      <section
        className="bg-white dark:bg-slate-900 py-20 border-t border-[#dbe6df] dark:border-slate-700"
        id="contact"
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black">Visit Our Clinic</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Located in the heart of the city, our clinic provides a
                  peaceful environment for you and your pets.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-slate-500">
                      123 Veterinary Lane, Pet City, PC 54321
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    call
                  </span>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-slate-500">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    mail
                  </span>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-slate-500">care@pawsandclaws.com</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-background-dark transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    social_leaderboard
                  </span>
                </a>
                <a
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-background-dark transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                </a>
                <a
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-background-dark transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    alternate_email
                  </span>
                </a>
              </div>
            </div>
            <div className="h-[400px] w-full rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDx-gkkxb4pc-Xznghz0xPzqiRGsp4i2zRfp9aLy8Bl99nTr2av4ELEho-5sXkFeSUHStP-crtNMvGQxBLqTAbMLEv2yUeXepcdQa887eXyCuU1qMsOo27F3bs5LgYbNdC2pMKDPRxM1HUuvEI0G8O-3tAKWyeb_YkGaTeN33MsQmyGBojgL-LrLZRkMWpxVTOViWwTewa76vRmYreHBuZtZngx23edMAaqOR4eydZq6_2kxwLymf6vkap8DOdNCjSn4I11SFPfg8')",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-primary p-3 shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">
                    location_on
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
