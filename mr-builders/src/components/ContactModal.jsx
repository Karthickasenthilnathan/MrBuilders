import { XMarkIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactModal = ({ open, setOpen }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md rounded-xl bg-white p-8 shadow-xl">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-darkGray mb-6">
          Contact Us
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 hover:border-gold transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
              <PhoneIcon className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium text-darkGray">
                +91 77086 68707
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 hover:border-gold transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
              <EnvelopeIcon className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-darkGray">
                mrbuilders@email.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactModal
