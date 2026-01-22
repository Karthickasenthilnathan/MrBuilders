import {
  BuildingOffice2Icon,
  PencilSquareIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

const services = [
  {
    title: "Architecture Services in Chennai",
    description:
      "Our expert architects create innovative and functional designs tailored to your unique needs.",
    cta: "Get Architecture Help",
    icon: PencilSquareIcon,
  },
  {
    title: "Construction Services in Chennai",
    description:
      "We deliver exceptional residential and commercial construction projects with uncompromising quality.",
    cta: "Start Your Construction",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Interior Design Services",
    description:
      "Transform your spaces with modern, elegant interior designs crafted for comfort and style.",
    cta: "Design Your Interiors",
    icon: HomeModernIcon,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Upgrade and modernize your property with our reliable renovation and remodeling solutions.",
    cta: "Renovate Your Space",
    icon: WrenchScrewdriverIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const ServicesGrid = ({ setFormOpen }) => {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="
                  rounded-2xl
                  border border-gold/60
                  bg-white
                  p-8
                  shadow-[0_10px_30px_rgba(212,175,55,0.15)]
                  hover:shadow-[0_15px_45px_rgba(212,175,55,0.25)]
                "
              >
               
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10"
                >
                  <Icon className="h-7 w-7 text-gold" />
                </motion.div>

                <h3 className="mb-3 text-xl md:text-2xl font-semibold text-darkGray">
                  {service.title}
                </h3>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormOpen(true)}
                  className="
                    rounded-md
                    bg-darkGray
                    px-6 py-2.5
                    font-semibold text-gold
                  "
                >
                  {service.cta}
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid
