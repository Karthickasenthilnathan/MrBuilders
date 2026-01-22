import { motion } from "framer-motion"

const projects = [
  { title: "Luxury Villa Project", location: "ECR, Chennai" },
  { title: "Independent House Construction", location: "Velachery" },
  { title: "Modern Duplex Residence", location: "OMR, Chennai" },
  { title: "Residential Apartment Project", location: "Medavakkam" },
  { title: "Commercial Building", location: "T Nagar" },
  { title: "Premium Villa Construction", location: "Sholinganallur" },
  { title: "Custom Built Home", location: "Tambaram" },
  { title: "Contemporary Residence", location: "Perungudi" },
  { title: "Turnkey House Project", location: "Pallikaranai" },
]

const Projects = () => {
  return (
    <main className="bg-gray-100">

      
      <section className="bg-gray-900 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gold">Projects</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            A selection of our completed residential and commercial
            construction projects across Chennai.
          </p>
        </div>
      </section>

      
      <section className="py-20">
        <div className="container mx-auto px-6">

      
          <div className="grid gap-10 md:grid-cols-2">

            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  border border-gold/60
                  shadow-[0_10px_25px_rgba(212,175,55,0.15)]
                  transition
                  hover:-translate-y-2
                  hover:shadow-[0_20px_40px_rgba(212,175,55,0.35)]
                "
              >
               
                <div className="h-60 bg-gray-200 rounded-t-2xl flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Project Image Placeholder
                  </span>
                </div>

                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-darkGray">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}

export default Projects
