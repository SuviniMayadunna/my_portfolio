"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"  

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("Sending...")

    emailjs
      .send(
        "service_hcv2q0g", 
        "template_jpw2e11",
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "TufoY-o1CxLJs0sE6"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!")
          setFormData({ email: "", subject: "", message: "" })
        },
        (error) => {
          console.error("EmailJS Error:", error)
          setStatus("❌ Failed to send. Please try again.")
        }
      )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "suvijanadi@gmail.com",
      href: "mailto:suvijanadi@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(+94)762366618",
      href: "tel:(+94)762366618",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gampaha, Sri Lanka",
      href: "https://www.google.com/maps/place/Gampaha/@7.0814648,79.9917135,14z/data=!3m1!4b1!4m6!3m5!1s0x3ae2fb67a22e72d9:0x913a2c56a49c8d8e!8m2!3d7.0915358!4d79.9947762!16zL20vMDk2M2o1?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground">Response time: Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
