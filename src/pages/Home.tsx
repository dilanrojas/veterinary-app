import { UseUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = UseUser();
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] dark:text-white">
      <div className="flex">
        {/* Main Content */}
        <section className="flex-1 flex flex-col overflow-y-auto">
          <div className="p-8 max-w-6xl mx-auto w-full flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#111813] dark:text-white text-4xl font-extrabold leading-tight tracking-tight">
                  Welcome back, {user?.fullname || "user"}!
                </p>
                <p className="text-[#61896f] text-lg font-medium">
                  Your pets are in good hands today.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a3f31] shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-[#61896f] text-sm font-semibold uppercase tracking-wider">
                    Total Pets
                  </p>
                  <span className="material-symbols-outlined text-primary">
                    pets
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-black">{user?.pets.length}</p>
                </div>
                <p className="text-[#61896f] text-xs font-normal">
                  Registered in your accounts
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a3f31] shadow-sm ring-2 ring-primary/20">
                <div className="flex items-center justify-between">
                  <p className="text-[#61896f] text-sm font-semibold uppercase tracking-wider">
                    Next Appointment
                  </p>
                  <span className="material-symbols-outlined text-primary">
                    event_upcoming
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">In 2 days</p>
                  <p className="text-sm font-medium text-[#111813] dark:text-gray-300">
                    {user?.pets[0].name}
                  </p>
                </div>
                <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-primary/20 text-[#111813] dark:text-primary w-fit">
                  {user?.nextAppointment}
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a3f31] shadow-sm sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#61896f] text-sm font-semibold uppercase tracking-wider">
                    Health Alert
                  </p>
                  <span className="material-symbols-outlined text-amber-500">
                    warning
                  </span>
                </div>
                <p className="text-lg font-bold">
                  {user?.pets[1].name}'s Vaccination
                </p>
                <p className="text-sm text-[#61896f]">
                  Due in 12 days. We recommend booking a slot this week.
                </p>
              </div>
            </div>

            {/* Main Grid: Tiles and News */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TileCard
                  linkTo="/petlist"
                  title="My Pets"
                  description="View medical history, track weight, and update dietary preferences for all your companions."
                  buttonText="View Pets"
                  imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLenHpfJoI6UVzbNIfMDO9C7f88YNACVQSx3EYgoobgp-OKab_jYx2v3hogVTh0kuBHRWDInbI6vE26xWpyRft5EFQt39QJkyT7pGKHPOGFvgL2OeJBLRgTm8eHm8rzlNCSjpNV5-aVHtxM7l9CwyFzIkWWR4d8uBb071vovmIULgOGBz5zD7ls23VsZp4yq3Sp-fy3UlG5XBzRgIs-9Gp3GoQ5lhpFJ4sITxPV1QgWXLqAVAGBwKVOiYf_OXyQR5PuPQOZJYodA"
                />
                <TileCard
                  linkTo="/clientprofile"
                  title="My Profile"
                  description="Update contact information, payment methods, and notification preferences for your home."
                  buttonText="Edit Account"
                  imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCtGGWn2UG6W67Y7wGMYF4f6L9Yc8c5hXuQWyHv4PR0svk4jtzYM-r0uR7YMLzhGH1T3lBT7VlojxKXxzwq4_QoV2ZFwP_wRsiwjUtX8VRSeMfKC0-NiAPav7xvLRXQ9KF0jHkxCO3XzySZpXUGlHc-TcSRxxvCouglrzYoIxoh3a5LNdh_eBwhoYcs5JU2amw7rmHYDYpA67njFV5qdF2J3oxDy8rzhRxcSsQKyawyDTL3sCTzepdXBmg91hCnERmZ8nfV8SmvRTc"
                />
              </div>

              {/* Sidebar Section */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a3f31] p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      news
                    </span>
                    Clinic News
                  </h3>
                  <div className="flex flex-col gap-4">
                    <NewsItem
                      date="June 20, 2024"
                      title="New Grooming Services"
                      desc="We now offer therapeutic spa baths for senior dogs."
                    />
                    <NewsItem
                      date="July 04, 2024"
                      title="Independence Day Hours"
                      desc="The clinic will be closed for emergencies only on July 4th."
                    />
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#111813] dark:text-primary">
                      lightbulb
                    </span>
                    Health Tip
                  </h3>
                  <p className="text-sm font-bold mb-2">Summer Hydration</p>
                  <p className="text-sm text-[#111813] dark:text-gray-200 leading-relaxed italic">
                    "Ensure your pets have access to fresh water every 2 hours
                    during heatwaves. Adding a few ice cubes can make it more
                    enticing!"
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs font-bold">
                    <span>- Dr. Sarah Mills</span>
                    <a
                      className="flex items-center gap-1 text-primary"
                      href="#"
                    >
                      Read more{" "}
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

interface TileCardProps {
  title: string;
  description: string;
  buttonText: string;
  imgUrl: string;
  linkTo: string;
}
const TileCard = ({
  title,
  description,
  buttonText,
  imgUrl,
  linkTo,
}: TileCardProps) => (
  <div className="group relative flex flex-col gap-4 rounded-2xl bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a3f31] p-6 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
    <div
      className="w-full h-40 bg-center bg-cover rounded-xl mb-2"
      style={{ backgroundImage: `url('${imgUrl}')` }}
    ></div>
    <div>
      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-[#61896f] text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link to={linkTo}>
        <button className="w-full py-2.5 px-4 bg-[#f0f4f2] dark:bg-[#2a3f31] rounded-lg text-sm font-bold transition-colors hover:bg-primary hover:text-[#111813]">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

interface NewsItemProps {
  date: string;
  title: string;
  desc: string;
}

const NewsItem = ({ date, title, desc }: NewsItemProps) => (
  <div className="border-b border-[#f0f4f2] dark:border-[#2a3f31] pb-3 last:border-0 last:pb-0">
    <p className="text-xs font-bold text-primary mb-1 uppercase">{date}</p>
    <p className="text-sm font-bold mb-1">{title}</p>
    <p className="text-xs text-[#61896f]">{desc}</p>
  </div>
);

export default Home;
