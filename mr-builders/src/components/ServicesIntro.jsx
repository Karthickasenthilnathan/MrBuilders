import { motion } from "framer-motion"

const ServicesIntro = () => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">

         
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-darkGray"
          >
            Premium Construction, Architecture, and Design Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Explore our comprehensive range of services, designed to bring
            your dream home in Chennai to life with impeccable quality and
            attention to detail.
          </motion.p>

        </div>
      </div>
    </section>
  )
}

export default ServicesIntro
