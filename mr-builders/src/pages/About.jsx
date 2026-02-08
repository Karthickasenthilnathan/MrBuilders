import { motion } from "framer-motion"
import leader1 from "../assets/images/leader1.jpg"
import leader2 from "../assets/images/leader2.jpg"
import leader3 from "../assets/images/leader3.jpg"

const About = ({ setFormOpen }) => {

  const team = [
    {
      name: "Jessica Smith",
      role: "Chief Executive Officer",
      image: leader1,
    },
    {
      name: "Carol Johnson",
      role: "Operations Manager",
      image: leader2,
    },
    {
      name: "Sarah Williams",
      role: "Project Director",
      image: leader3,
    },
  ]

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
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold text-darkGray mb-10"
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
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-52 w-full object-cover object-center rounded-xl mb-4"
                />

                <h4 className="text-xl font-semibold text-darkGray">
                  {member.name}
                </h4>

                <p className="text-gray-500">
                  {member.role}
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
