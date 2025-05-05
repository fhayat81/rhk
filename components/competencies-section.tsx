import {
  LayoutTemplateIcon as LayoutPlanIcon,
  LightbulbIcon,
  BarChart3Icon,
  ThermometerIcon,
  Settings2Icon,
  FileTextIcon,
} from "lucide-react"

export function CompetenciesSection() {
  const competencies = [
    {
      icon: <LayoutPlanIcon className="h-8 w-8" />,
      title: "Space Planning",
      description: "Optimizing spatial layouts for efficient HVAC distribution and operation",
    },
    {
      icon: <LightbulbIcon className="h-8 w-8" />,
      title: "Concept Finalization",
      description: "Developing comprehensive HVAC concepts tailored to project requirements",
    },
    {
      icon: <BarChart3Icon className="h-8 w-8" />,
      title: "Energy Simulation",
      description: "Conducting detailed simulations to maximize energy efficiency",
    },
    {
      icon: <ThermometerIcon className="h-8 w-8" />,
      title: "Heat Load Calculation",
      description: "Precise calculations to ensure optimal system sizing and performance",
    },
    {
      icon: <Settings2Icon className="h-8 w-8" />,
      title: "Equipment Selection",
      description: "Selecting the most appropriate equipment for specific project needs",
    },
    {
      icon: <FileTextIcon className="h-8 w-8" />,
      title: "Tendering",
      description: "Preparing comprehensive tender documents and technical specifications",
    },
  ]

  return (
    <section id="competencies" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-gray-800">Core Competencies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 text-purple-600">{competency.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{competency.title}</h3>
              <p className="text-gray-600">{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
