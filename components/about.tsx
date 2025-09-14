import { Card, CardContent } from "@/components/ui/card"
import { Heart, Coffee, Code2, GraduationCap, School } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Heart,
      title: "Passionate",
      description: "Dedicated to creating meaningful digital experiences that solve real problems.",
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description: "Constantly exploring new technologies and staying updated with industry trends.",
    },
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Enjoy tackling complex challenges and finding elegant solutions.",
    },
  ]

  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      year: "2020-2024",
      description: "Specialized in Software Engineering and Web Development",
    },
    {
      icon: School,
      degree: "High School Diploma",
      institution: "School Name",
      year: "2018-2020",
      description: "Mathematics and Science Focus",
    },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground text-balance">
            I'm a passionate developer with a love for creating digital experiences that make a difference. With
            expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started my journey in web development 3 years ago, I've been constantly learning and evolving with the
              ever-changing landscape of technology. From front-end frameworks to back-end architectures, I enjoy the
              challenge of building complete solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>

          <div className="flex justify-center">
            <img src="/developer-workspace.png" alt="Developer workspace" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{item.degree}</h4>
                      <p className="text-primary font-medium mb-1">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="text-primary" size={24} />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
