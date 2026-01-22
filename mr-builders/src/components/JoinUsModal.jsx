import { XMarkIcon } from "@heroicons/react/24/outline"

const JoinUsModal = ({ open, setOpen }) => {
  if (!open) return null

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl"
      >
        
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-darkGray mb-2">
          Join MR Builders
        </h2>
        <p className="text-gray-600 mb-8">
          Interested in working with us? Share your details and we’ll get in touch.
        </p>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              placeholder="+91"
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Interested Role</label>
            <select
              className="mt-2 w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-gold"
            >
              <option>Select role</option>
              <option>Architect</option>
              <option>Site Engineer</option>
              <option>Interior Designer</option>
              <option>Project Manager</option>
              <option>Intern</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">
              Experience / Message
            </label>
            <textarea
              rows="4"
              placeholder="Briefly tell us about yourself or your experience"
              className="mt-2 w-full border-b border-gray-300 py-2 outline-none resize-none focus:border-gold"
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-gold py-3 text-lg font-semibold text-darkGray hover:opacity-90 transition"
            >
              Submit Details
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default JoinUsModal
