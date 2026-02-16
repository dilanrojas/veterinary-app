import { Link } from "react-router-dom";

interface TileCardProps {
  title: string;
  description: string;
  buttonText: string;
  imgUrl: string;
  linkTo: string;
}

export default function TileCard({
  title,
  description,
  buttonText,
  imgUrl,
  linkTo,
}: TileCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a3f31] p-6 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div
        className="w-full bg-center bg-cover rounded-xl mb-2 min-h-60"
        style={{ backgroundImage: `url('${imgUrl}')` }}
      ></div>
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-[#61896f] text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        <Link to={linkTo}>
          <button className="w-full py-2.5 px-4 bg-[#f0f4f2] dark:bg-[#2a3f31] rounded-lg text-sm font-bold transition-colors hover:bg-primary hover:text-[#111813] mt-auto">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};
