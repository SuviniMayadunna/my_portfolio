"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center animate-pulse-glow">
                <img
                  src="/developer.jpg"
                  alt="Profile"
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-float">
            <div className="space-y-2">
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
                Hey there,<br/> I'm <span className="text-primary">Suvini Mayadunna</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <a href="/myCV.pdf" download={true}>
              <Button
              
                variant="outline"
                
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
              >
                Download CV
              </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-8">
              <a
                href="https://github.com/SuviniMayadunna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/suvini-mayadunna-79a5382a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:suvijanadi@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-primary" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
