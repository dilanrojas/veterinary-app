export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <span
              className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:text-primary">Expert
              Veterinary Care</span>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Compassionate Care for Your Best Friends
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              A comprehensive veterinary management clinic providing world-class care for your pets. Over 15 years of
              experience with certified specialists dedicated to your pet's wellbeing.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">calendar_today</span>
              Book Appointment
            </button>
            <button
              className="flex items-center gap-2 rounded-xl border-2 border-[#dbe6df] px-8 py-4 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Services
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full rounded-2xl bg-center bg-cover shadow-2xl overflow-hidden"
            data-alt="Happy Golden Retriever playing in a sunny garden"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAADzubtWcSnE1CRBptTyzkzEXXrHsR3MtSsJDT1b--3RKYxZ_nruwU6EAo97BhlsE-SGqXuiNSWYBMTq75ak1sgaqxKJLDzycvWfflQeC5nRiim9KAt3WYDz_-RelQu-yt-ciOldZhDthl0JhePmpq3E28G05ck1QmWU-CCysGUjzaRChLoccr-98u4oNDSAvA02zyp6dpCUlv6m677hj2Giplve3fY_0sHYYA-U6wgL4oTvMxN4yrymqXhQC7JKlvno6FGps6mM')",
            }}
          >
          </div>
          <div
            className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl border border-[#dbe6df] dark:border-slate-700 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" data-alt="Client avatar 1"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYoDBOHNlJABaKhFXR4x23oFC8vh6FDHPF75Obmf7cZi4hPLejG6ReR-N9eYsSl77m4guxpyPp2MaJMpAqB6rl9iOqCEWOBkxmI85MNv_wWzbRJU99H7z63TFB_fzHpCvRz6_NsSU8cSs5DrXIT_VfYHliT6jh7qP07QApHUWA6BXGUE9uZ6qBtOoHdVXWJkoeF3Zag1CghjFpHc30TULroglCa87d4TiequS7P-_SORbZhiN_8SDgg5g_JKuqAV5mHsgjI_ajGJs')",
                    backgroundSize: "cover"
                  }}
                >
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" data-alt="Client avatar 2"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMArdtSXNz_2ljTWWB1KQYKj5fLT3Qj63bFT3jT88YhyiXXHgH-nVAOWBi5C7eKDD0k274we8mNASsqFplm5sTRr4I14zSOVRNhVnSiNOHE9JrysLyL1oMp2Gw4U0zr-uIeV7dr73t1KVuRXoL3f4L5gTn6o21LyoaQl7LofhQTsUgbLbQDVRglu2kiBRG9lLHOW8LZmk7JBOQRk-e0a4CTFrjwpo3a-vlK6Np1ofUDf7ay02xJxDV4qJgeUrHXL4TAuQtiuovO24')",
                    backgroundSize: "cover"
                  }}
                >
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" data-alt="Client avatar 3"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDVr3EgRRDV5-K1hnGv6Fu02RlTqK7P5rpLKDfA57eGOoomU1RfktVEknbHxMcUHSjH9ediHtbQiMdR5UKM_X_Efu0klOwfN5gwfDiI2KK9muAe04JbR5ZToFR3bpHQkvpWaMrvJPDVV22DsCZ1Rhb-jZbE7BUXcRIQrlXE5vfmto3D98iYuR2ZCqzRHHYbL6dCz5NaZfLm4hQqoNaPlrNaESCjOXuldqgevP0gLrEb6pGKLpUc_cNfd-Z4g_UBGANgMxTVSmZEi0')",
                    backgroundSize: "cover"
                  }}
                >
                </div>
              </div>
              <div>
                <p className="text-sm font-bold">5,000+ Happy Pets</p>
                <div className="flex text-yellow-400">
                  <span className="material-symbols-outlined !text-sm">star</span>
                  <span className="material-symbols-outlined !text-sm">star</span>
                  <span className="material-symbols-outlined !text-sm">star</span>
                  <span className="material-symbols-outlined !text-sm">star</span>
                  <span className="material-symbols-outlined !text-sm">star</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
