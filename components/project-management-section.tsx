import { UsersIcon, ClipboardCheckIcon, ClockIcon, MessageSquareIcon } from "lucide-react"

export function ProjectManagementSection() {
  const skills = [
    {
      icon: <UsersIcon className="h-10 w-10" />,
      title: "Cross-Disciplinary Coordination",
      description: "Seamless coordination across MEP services ensuring integrated system design and implementation",
    },
    {
      icon: <ClipboardCheckIcon className="h-10 w-10" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure all systems meet or exceed industry standards",
    },
    {
      icon: <ClockIcon className="h-10 w-10" />,
      title: "Timeline Management",
      description: "Strategic planning and execution to deliver projects on schedule and within budget",
    },
    {
      icon: <MessageSquareIcon className="h-10 w-10" />,
      title: "Client Communication",
      description:
        "Acting as the single-point contact for clients, architects, and contractors throughout the project lifecycle",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-gray-800">Project Management</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Beyond technical expertise, I bring strong project management skills to ensure successful project delivery
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 text-purple-600">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
