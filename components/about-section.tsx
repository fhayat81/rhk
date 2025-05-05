import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-800">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/picture-2.jpeg"
                alt="Rustam Hayat Khan - Professional Photo"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              With extensive experience in the HVAC industry, I specialize in the design, planning, execution, and
              project control of sophisticated HVAC systems. My expertise spans a wide range of technologies including
              Centralized Plants, VRV systems, District Cooling, and Passive Building Design.
            </p>
            <p>
              Throughout my career, I've focused on creating energy-efficient solutions that balance optimal comfort
              with sustainable operation. I take pride in delivering systems that not only meet but exceed client
              expectations while adhering to industry standards and environmental regulations.
            </p>
            <p>
              My approach combines technical expertise with practical problem-solving, ensuring that each project is
              completed to the highest standards of quality and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
