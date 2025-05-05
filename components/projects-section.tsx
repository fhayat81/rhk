import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Commercial Complex HVAC Design",
      description: "Designed and implemented a comprehensive HVAC system for a 50,000 sq ft commercial complex, achieving 30% energy savings through innovative heat recovery systems.",
      image: "/projects/commercial-complex.jpg",
      technologies: ["VRV Systems", "Heat Recovery", "Building Automation"],
      year: "2023"
    },
    {
      title: "Hospital Air Quality Management",
      description: "Led the design of specialized air handling units and pressure control systems for a multi-specialty hospital, ensuring optimal air quality and infection control.",
      image: "/projects/hospital.jpg",
      technologies: ["Air Handling Units", "Pressure Control", "HEPA Filtration"],
      year: "2022"
    },
    {
      title: "Data Center Cooling Solution",
      description: "Developed an energy-efficient cooling solution for a Tier-4 data center, implementing precision cooling and hot aisle containment strategies.",
      image: "/projects/data-center.jpg",
      technologies: ["Precision Cooling", "Hot Aisle Containment", "Energy Management"],
      year: "2021"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-800">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of significant HVAC engineering projects that demonstrate expertise in energy efficiency and sustainable design
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-sm font-medium text-purple-600">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 