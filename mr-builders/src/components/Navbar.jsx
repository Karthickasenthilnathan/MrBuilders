import { Link } from "react-router-dom"

const Navbar = ({ setFormOpen, setJoinOpen }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          <Link to="/" className="text-2xl font-bold text-darkGray">
            MR Builders
          </Link>

          <nav className="flex items-center gap-10 text-gray-700 font-medium">
            <Link to="/about" className="hover:text-gold transition">
              About Us
            </Link>

            <Link to="/services" className="hover:text-gold transition">
              Services
            </Link>

            <Link to="/projects" className="hover:text-gold transition">
              Projects
            </Link>

            <button
              onClick={() => setJoinOpen(true)}
              className="hover:text-gold transition"
            >
              Join Us
            </button>
            </nav>
          <button
            onClick={() => setFormOpen(true)}
            className="rounded-md border border-gold px-5 py-2 text-gold font-semibold hover:bg-gold hover:text-white transition"
          >
            Contact
          </button>

        </div>
      </div>
    </header>
  )
}

export default Navbar
