import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2023 - present",
      role: "Deputy Manager - Engineering MEP",
      company: "Blue Star Limited",
      description:
        "Managed HVAC system design and implementation for mid to large-scale projects, coordinating with cross-functional teams.",
      logo: "bluestar.jpeg"
    },
    {
      period: "2019 - 2023",
      role: "Manager Design Planning And Project Control",
      company: "Sterling and Wilson",
      description: "Developed HVAC designs and specifications for residential and small commercial buildings.",
      logo: "snw.png"
    },
    {
      period: "2010 - 2019",
      role: "Senior Engineer",
      company: "Voltas Limited - A TATA Enterprise",
      description:
        "Assisted in HVAC system design, load calculations, and equipment selection under senior engineer supervision.",
      logo: "voltas.png"
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-800">Professional Experience</h2>

        <div className="relative border-l border-purple-600 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white bg-purple-600"></div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-16">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
