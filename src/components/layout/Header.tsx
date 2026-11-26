import { Link } from 'react-router'

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#171717] p-6">
      <Link to="/" className="text-2xl font-bold">
        SimplePlans.
      </Link>

      <nav className="flex flex-wrap gap-6 font-bold">
        <Link to="/insurance-101">LEARN</Link>
        <Link to="/calculator">CALCULATE</Link>
        <Link to="/scenarios">EXPLORE</Link>
      </nav>
    </header>
  )
}

export default Header