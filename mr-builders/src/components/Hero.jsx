import heroImage from "../assets/images/hero-villa.jpg"

const Hero = ({ setFormOpen }) => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-100 flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

       
        <div>
          <h1 className="text-5xl font-bold text-darkGray leading-tight">
            Opening the Door to a{" "}
            <span className="text-gold">Life Built Better</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            MR Builders is a trusted construction company delivering
            high-quality residential and commercial projects with a
            focus on excellence, durability, and modern design.
          </p>

          <button
            onClick={() => setFormOpen(true)}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3 text-white font-semibold shadow-glow hover:opacity-90 transition"
          >
            Book a Free Quote
          </button>
        </div>

     
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Luxury Villa"
            className="rounded-2xl shadow-xl max-h-[480px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero
