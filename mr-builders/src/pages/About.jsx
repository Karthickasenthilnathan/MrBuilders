import { motion } from "framer-motion"

const About = ({ setFormOpen }) => {
  return (
    <main className="bg-gray-100">

      <section className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold"
          >
            About <span className="text-gold">MR Builders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-300"
          >
            Building trust, quality, and excellence through reliable
            construction solutions in Chennai.
          </motion.p>

        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold text-darkGray mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="text-gray-700 leading-relaxed text-lg"
          >
            MR Builders is a Chennai-based construction company specializing
            in residential and commercial projects.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-gray-700 leading-relaxed text-lg"
          >
            Our team combines technical expertise with modern construction
            practices to ensure every project is executed with precision.
          </motion.p>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold text-darkGray mb-6"
          >
            Our Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="text-gray-700 leading-relaxed text-lg"
          >
            With years of experience in the construction industry, MR Builders
            has successfully completed a wide range of projects.
          </motion.p>

        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-darkGray mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted construction company recognized for quality
              workmanship and ethical practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-darkGray mb-4">
              Our Mission
            </h3>
            <ul className="text-gray-600 space-y-3 leading-relaxed">
              <li>• Deliver high-quality construction projects</li>
              <li>• Maintain transparency and integrity</li>
              <li>• Ensure timely execution</li>
            </ul>
          </motion.div>

        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold text-darkGray mb-4"
          >
            Our Leadership Team
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto"
          >
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <div className="h-52 bg-gray-200 rounded-xl mb-4" />
                <h4 className="text-xl font-semibold text-darkGray">
                  Team Member Name
                </h4>
                <p className="text-gray-500">
                  Designation
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="bg-gray-900 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-white mb-6"
        >
          Ready to Build with <span className="text-gold">MR Builders</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Partner with us to turn your construction ideas into reality.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setFormOpen(true)}
          className="bg-gold text-darkGray px-8 py-4 rounded-md font-semibold hover:opacity-90 transition"
        >
          Contact Us
        </motion.button>
      </section>

    </main>
  )
}

export default About
