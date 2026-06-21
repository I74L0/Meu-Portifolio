import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens",
      skills: ["Python", "JavaScript", "TypeScript", "C#", "Dart", "SQL", "PowerShell", "Bash"]
    },
    {
      title: "Frameworks & Libs",
      skills: ["Django", "Django REST Framework", "React", "Vite", "Flutter", ".NET", "Spring"]
    },
    {
      title: "DevOps & Ferramentas",
      skills: ["Docker", "Docker Compose", "Nginx", "Git", "GitHub", "Figma", "GCP", "Active Directory"]
    }
  ];

  return (
    <section id="habilidades" className="px-6 scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <div className="glass p-8 md:p-12 rounded-3xl border border-slate-700/50">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 text-center">
            Habilidades & Tecnologias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-purple-400 border-b border-slate-700 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
