"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { FaFigma, FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiPostman, SiC, SiExpress, SiMongodb, SiMysql } from "react-icons/si"


export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
      { name: "React JS", icon: <FaReact className="text-sky-500" />, description: "Building interactive UIs" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, description: "Dynamic web development" },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, description: "Structuring the web" },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, description: "Styling the web" },
    ],
    },
    {
      title: "Backend",
      skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, description: "Server-side JavaScript" },
      { name: "Express JS", icon: <SiExpress className="text-gray-700 dark:text-white" />, description: "Web framework for Node.js" },
      
      { name: "Java", icon: <FaJava className="text-red-600" />, description: "Enterprise-grade applications" },
      { name: "C", icon: <SiC className="text-blue-600" />, description: "Low-level programming" },
    ],
    },
    {
      title: "Databases & Tools",
      skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, description: "NoSQL database" },
      { name: "MySQL", icon: <SiMysql className="text-sky-700" />, description: "Relational database" },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, description: "API testing tool" },
      { name: "Figma", icon: <FaFigma className="text-pink-500" />, description: "Design & prototyping" },

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
