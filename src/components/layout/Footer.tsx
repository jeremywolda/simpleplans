import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-[#171717] text-[#F5F1E6] p-6">
      <Link to="/" className="text-2xl font-bold">
        SimplePlans.
      </Link>

      <p className="mt-2">
        Health insurance, made human.
      </p>

      <nav aria-label="Footer navigation" className="mt-6 flex flex-wrap gap-4">
        <Link to="/about">About</Link>
        <Link to="/sources">Sources</Link>
        <Link to="/methodology">Methodology</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </nav>

      <p className="mt-6 text-sm">
        Made for humans, by a human.
      </p>
    </footer>
  )
}

export default Footer