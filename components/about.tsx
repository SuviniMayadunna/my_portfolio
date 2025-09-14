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
      icon: Code2,
      title: "Always Learning",
      description: "Constantly exploring new technologies and staying updated with industry trends.",
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Thrive in collaborative environments and adapt quickly to new roles.",
    },
  ]

  const education = [
    {
      icon: GraduationCap,
      degree: "BSc. (Hons) in Information Technology and Management",
      institution: "University of Moratuwa",
      year: "2023 - Present",
      description: "Focus on software engineering, algorithms, and web development.",
    },
    {
      icon: School,
      degree: " G.C.E Advanced Level (2021) ",
      institution: "Rathnavali Balika Vidyalaya Gampaha",
      year: "Island Rank - 14th",
      description: "Z-Score: 2.4343",
    },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground text-balance">
            I am an IT undergraduate with a strong interest in software engineering and a focus on creating reliable, user-centered solutions.
            I am a passionate developer with a love for creating digital experiences that make a difference. With
            expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
             My journey in technology began with curiosity—how software and innovation can solve everyday problems.
              Starting with a strong academic foundation and a top-ranking G.C.E. A/L result, I pursued my degree at the University of Moratuwa, 
              where I explored both software and hardware projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
           From automating acid dilution in a hardware project to developing full-stack
               web applications like EduNotes and a scalable Salon Management System, I have gained hands-on experience across diverse domains. 
               Leading the admin module of the Salon Management System strengthened my skills in governance, payments, analytics, and team collaboration.
                My internship at Peoples Bank and involvement in university marketing initiatives further sharpened my adaptability
                 and communication skills. Each step has shaped me into a developer who thrives on learning continuously, tackling challenges
                  and creating impactful, user-focused solutions.
            </p>
          </div>

          <div className="flex justify-center">
            <img alt="Coding" width="400" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif"/>
            
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
