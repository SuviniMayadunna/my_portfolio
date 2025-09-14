import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"

export function Education() {
  const education = [
    {
      type: "University",
      icon: GraduationCap,
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2020 - 2024",
      description: "Focused on software engineering, algorithms, and web development. Graduated with honors.",
      achievements: ["Dean's List", "Computer Science Society President", "Hackathon Winner"],
    },
    {
      type: "School",
      icon: School,
      degree: "High School Diploma",
      institution: "High School Name",
      period: "2016 - 2020",
      description: "Specialized in Mathematics and Science. Active in programming club and robotics team.",
      achievements: ["Valedictorian", "Science Fair Winner", "Programming Club Leader"],
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
          <p className="text-lg text-muted-foreground text-balance">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-primary font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Achievements:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
