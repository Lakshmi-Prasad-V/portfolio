import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const data = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["JavaScript", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: ["React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Node.js"],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["AWS", "Docker", "CI/CD"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git"],
    },
  ];

  return (
    <section id="skills" className="py-6 px-6 bg-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-blue-600 text-xl">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;