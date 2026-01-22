import { Link } from "react-router-dom"
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"

const Footer = ({ setJoinOpen, setFormOpen }) => {
  return (
    <footer className="bg-gold">
      <div className="container mx-auto px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              MR Builders
            </h3>
            <p className="text-black/80 leading-relaxed max-w-sm">
              MR Builders delivers quality and innovative building
              solutions with integrity and excellence across residential
              and commercial projects.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-black">
              Navigation
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-black transition hover:text-gray-700"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-black transition hover:text-gray-700"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="text-black transition hover:text-gray-700"
                >
                  Projects
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setJoinOpen(true)}
                  className="text-black transition hover:text-gray-700"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-black">
              Contact Us
            </h4>

            <div className="space-y-4 text-black/80">
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-black" />
                <div>
                  <p>+91 77086 68707</p>
                  <p>+91 72000 94121</p>
                </div>
              </div>

              <div
                className="flex items-center gap-3 cursor-pointer hover:text-gray-700 transition"
                onClick={() => setFormOpen(true)}
              >
                <EnvelopeIcon className="h-5 w-5 text-black" />
                <p>enquiries@mrbuilders.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-black" />
                <p>
                  Chennai, Tamil Nadu<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-black/20" />

        <p className="text-center text-black/70">
          © 2026 MR Builders. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
