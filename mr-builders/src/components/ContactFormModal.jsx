import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence } from "framer-motion"

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 30,
    transition: { duration: 0.25 },
  },
}

const formStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const fieldFade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const ContactFormModal = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setOpen(false)}
        >
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white px-8 py-10 md:px-12 md:py-12 shadow-2xl"
          >
            
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

          
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-darkGray">
                Contact Us
              </h2>
              <p className="mt-2 text-gray-500">
                Tell us about your project and we’ll get back to you shortly.
              </p>
            </div>

           
            <motion.form
              variants={formStagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
            >
             
              <motion.div variants={fieldFade}>
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
                />
              </motion.div>

          
              <motion.div variants={fieldFade}>
                <label className="text-sm text-gray-600">Mobile</label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
                />
              </motion.div>

              <motion.div variants={fieldFade}>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
                />
              </motion.div>

             
              <motion.div variants={fieldFade}>
                <label className="text-sm text-gray-600">Location</label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="mt-2 w-full border-b border-gray-300 py-2 outline-none focus:border-gold"
                />
              </motion.div>

              
              <motion.div variants={fieldFade} className="md:col-span-2">
                <label className="text-sm text-gray-600 block mb-3">
                  Service
                </label>
                <div className="flex flex-wrap gap-6 text-gray-700">
                  {["Construction", "Architecture", "Interior", "Renovation"].map(
                    (service) => (
                      <label key={service} className="flex items-center gap-2">
                        <input type="radio" name="service" />
                        {service}
                      </label>
                    )
                  )}
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldFade} className="md:col-span-2">
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows="3"
                  placeholder="Write your message..."
                  className="mt-2 w-full border-b border-gray-300 py-2 outline-none resize-none focus:border-gold"
                />
              </motion.div>

              
              <motion.div variants={fieldFade} className="md:col-span-2 pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full rounded-md bg-gold py-3 text-white font-semibold shadow-glow"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactFormModal
