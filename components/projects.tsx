import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Salon Booking and Management System",
      description:
        "A scalable platform that streamlines salon operations by enabling customers to book appointments, purchase products, and leave reviews, while providing admin with dashboards for payments, analytics, and content moderation.",
      image: "/salonme.png",
      tech: ["React.js","Next.js", "Express.js", "Stripe", "mongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuviniMayadunna/salon-management-system",
    },
    {
      title: "EduNotes",
      description:
        "A digital note-management system built with Laravel, designed to help students create, edit, and organize notes seamlessly, reducing reliance on handwritten materials and improving productivity.",
      image: "/edunotes.png",
      tech: ["PHP", "CSS", "Blade", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuviniMayadunna/edunotes",
    },
    {
      title: "ToDo App",
      description:
        "A simple and secure task management tool that helps users organize daily activities with features for creating, updating, and tracking tasks efficiently.",
      image: "/todo.png",
      tech: ["React.js","Next.js", "Express.js", "JWT", "mongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuviniMayadunna/to-do",
    },
    {
      title: "Sales Order Management System",
      description:
        "A comprehensive order management solution that streamlines sales operations with accurate calculations, real-time updates, secure data protection, and an intuitive interface for efficient business workflows.",
      image: "/salesorder.png",
      tech: [".NET", "React.js", "SQLite", "Modern CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuviniMayadunna/sales-order-app",
    },
  ]

  return (

    <center>
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Here are some of my recent projects that showcase my skills and passion for creating innovative digital
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   {/* <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>*/}
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </center>
  )
}
