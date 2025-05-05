export function TechnologiesSection() {
  const technologies = [
    {
      title: "Chilled Beams",
      description: "Energy-efficient cooling solution that uses convection to cool spaces without fans",
    },
    {
      title: "Variable Primary Pumping Systems",
      description: "Advanced pumping systems that adjust flow rates based on demand, reducing energy consumption",
    },
    {
      title: "Radiant Cooling",
      description: "Systems that cool spaces through radiation, providing superior comfort with lower energy use",
    },
    {
      title: "Displacement Diffusers",
      description: "Air distribution method that improves indoor air quality and thermal comfort",
    },
    {
      title: "Heat Recovery Systems",
      description: "Technology that captures and reuses waste heat, significantly improving system efficiency",
    },
    {
      title: "Building Automation Systems",
      description: "Intelligent controls that optimize HVAC operation based on occupancy and environmental conditions",
    },
  ]

  return (
    <section id="technologies" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-gray-800">Innovative Technologies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I specialize in implementing cutting-edge HVAC technologies that maximize efficiency, comfort, and
          sustainability
        </p>
        <div className="space-y-6">
          {technologies.map((tech, index) => (
            <div key={index} className="p-6 border rounded-lg transition-all duration-300 hover:bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
