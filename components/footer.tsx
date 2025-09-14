import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Suvini Mayadunna</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate full-stack developer creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/SuviniMayadunna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/suvini-mayadunna-79a5382a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:suvijanadi@gmail.com"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© {currentYear} Suvini Mayadunna. All rights reserved.</p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
