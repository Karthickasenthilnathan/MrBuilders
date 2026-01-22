import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const Construction = ({ setFormOpen }) => {
  return (
    <main className="bg-gray-100">

      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            Construction <span className="text-gold">Services</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-300"
          >
            End-to-end construction solutions delivering strength,
            durability, and excellence in every structure we build.
          </motion.p>
        </motion.div>
      </section>

     
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 max-w-5xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-darkGray mb-6"
          >
            Reliable Construction Services in Chennai
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-700 leading-relaxed text-lg"
          >
            MR Builders offers comprehensive construction services for
            residential and commercial projects. From planning and
            foundation to finishing and handover, we ensure quality,
            transparency, and timely execution at every stage.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-700 leading-relaxed text-lg"
          >
            Our experienced engineers, skilled workforce, and systematic
            project management approach help us deliver structurally
            sound and aesthetically pleasing buildings.
          </motion.p>
        </motion.div>
      </section>

 
      <section className="bg-white py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 max-w-6xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-darkGray mb-12 text-center"
          >
            Our Construction Process
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Planning & Design",
                desc: "Understanding client requirements, site analysis, and detailed planning.",
              },
              {
                title: "Execution & Supervision",
                desc: "On-site execution with strict quality control and safety compliance.",
              },
              {
                title: "Completion & Handover",
                desc: "Timely completion and smooth handover with documentation.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-darkGray mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      
      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 max-w-6xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-darkGray mb-10 text-center"
          >
            Why Choose MR Builders?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Experienced construction engineers and supervisors",
              "High-quality materials and standards",
              "Transparent pricing",
              "On-time delivery",
              "Customized solutions",
              "Strong site supervision",
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <p className="text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

     
      <section className="bg-gray-900 py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-white mb-6"
          >
            Planning a Construction Project?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Partner with MR Builders for reliable construction services.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormOpen(true)}
            className="bg-gold text-darkGray px-8 py-4 rounded-md font-semibold"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

    </main>
  )
}

export default Construction
