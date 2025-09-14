"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", description: "Building interactive UIs" },
        { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
        { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", description: "Server-side JavaScript" },
        { name: "Express", icon: "🚀", description: "Web application framework" },
        { name: "PostgreSQL", icon: "🐘", description: "Relational database" },
        { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📝", description: "Version control system" },
        { name: "Docker", icon: "🐳", description: "Containerization platform" },
        { name: "AWS", icon: "☁️", description: "Cloud computing services" },
        { name: "Figma", icon: "🎯", description: "Design and prototyping" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          hoveredSkill === `${index}-${skillIndex}`
                            ? "border-primary bg-primary/5 transform scale-105"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-medium">{skill.name}</h4>
                            <p
                              className={`text-xs transition-all duration-300 ${
                                hoveredSkill === `${index}-${skillIndex}`
                                  ? "text-primary opacity-100"
                                  : "text-muted-foreground opacity-70"
                              }`}
                            >
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
