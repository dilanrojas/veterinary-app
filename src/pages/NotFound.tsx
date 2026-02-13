import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-y-4 min-h-[60vh] items-center justify-center">
      <h1>Oops! Looks like you're lost</h1>
      <button className="flex items-center h-fit py-3.5 gap-x-3 rounded-lg bg-primary px-5 text-sm font-bold text-background-dark hover:brightness-110 transition-all" onClick={() => navigate('/')}>
        Go back
      </button>
    </section>
  )
}
