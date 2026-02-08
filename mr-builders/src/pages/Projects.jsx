import { motion } from "framer-motion"
import project1 from "../assets/images/project1jpg.jpg"
import project2 from "../assets/images/project2.jpg"
import project3 from "../assets/images/project3.jpg"
import project4 from "../assets/images/project4.jpg"
import project5 from "../assets/images/project5.jpg"
import project6 from "../assets/images/project6.jpg"
import project7 from "../assets/images/project7.jpg"
import project8 from "../assets/images/project8.jpg"
import project9 from "../assets/images/project9.jpg"



const projects = [
  {
    title: "Luxury Villa Project",
    location: "ECR, Chennai",
    image: project1,
  },
  {
    title: "Independent House Construction",
    location: "Velachery",
    image: project2,
  },
  {
    title: "Modern Duplex Residence",
    location: "OMR, Chennai",
    image: project3,
  },
  {
    title: "Residential Apartment Project",
    location: "Medavakkam",
    image: project4,
  },
  {
    title: "Commercial Building",
    location: "T Nagar",
    image: project5,
  },
  {
    title: "Premium Villa Construction",
    location: "Sholinganallur",
    image: project6,
  },
  {
    title: "Custom Built Home",
    location: "Tambaram",
    image: project7,
  },
  {
    title: "Contemporary Residence",
    location: "Perungudi",
    image: project8,
  },
  {
    title: "Turnkey House Project",
    location: "Pallikaranai",
    image: project9,
  },
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
               
                <img
  src={project.image}
  alt={project.title}
  className="h-60 w-full object-cover object-center rounded-t-2xl"
/>


                
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
