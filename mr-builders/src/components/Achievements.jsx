


import { motion } from "framer-motion"
import iso from "../assets/images/iso.png"
import iga from "../assets/images/iga.png"
import bqs from "../assets/images/bqs.png"
import certificate from "../assets/images/certificate.png"

const Achievements = ({ setFormOpen }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 flex justify-center">

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            w-full max-w-6xl
            rounded-[2.5rem]
            bg-gold/80
            p-8 md:p-10
            grid md:grid-cols-2 gap-10 items-center
            shadow-[0_20px_60px_rgba(212,175,55,0.25)]
          "
        >

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-darkGray"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              15+ Years of Building Excellence in Chennai
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-800">
              MR Builders brings over 15 years of experience in crafting
              high-quality residential and commercial projects. Our
              commitment to quality, on-time delivery, and customer
              satisfaction has earned us industry recognition and trust.
            </p>

            <ul className="space-y-3 mb-8 text-gray-800">
              {[
                "15+ years of excellence in turnkey construction",
                "Dedicated architects and personalized project management",
                "ISO-certified processes ensuring unmatched quality",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-800"></span>
                  {item}
                </motion.li>
              ))}
            </ul>

           
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFormOpen(true)}
              className="
                inline-block
                rounded-xl
                bg-darkGray
                px-8 py-3
                text-base font-semibold text-gold
                shadow-md
                hover:shadow-lg
                transition
              "
            >
              Request Your Free Consultation Today
            </motion.button>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >

            
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-4 shadow-md"
            >
              <img
                src={certificate}
                alt="Achievement Certificate"
                className="max-h-[280px] object-contain"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-6 bg-white rounded-2xl p-4 shadow-md"
            >
              <img src={iso} alt="ISO Certified" className="h-12 object-contain" />
              <img src={iga} alt="IGA Award" className="h-12 object-contain" />
              <img src={bqs} alt="BQS Certified" className="h-12 object-contain" />
            </motion.div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
