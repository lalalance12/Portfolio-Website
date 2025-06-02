"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Leading frontend development for multiple high-traffic web applications serving over 1M users. Mentoring junior developers and establishing best practices for the team.",
    responsibilities: [
      "Led the redesign of the main application, resulting in 40% improved user engagement",
      "Implemented modern React patterns and TypeScript to improve code quality",
      "Mentored 3 junior developers and conducted technical interviews",
      "Collaborated with design and product teams to deliver user-centered solutions",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Jest",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Agency",
    location: "Austin, TX",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed and maintained multiple client websites and web applications using modern tech stack. Worked closely with clients to understand requirements and deliver solutions.",
    responsibilities: [
      "Built 15+ responsive websites and web applications for various clients",
      "Integrated third-party APIs and payment systems",
      "Optimized application performance resulting in 50% faster load times",
      "Maintained and updated existing client projects",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "Stripe API",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartupX",
    location: "Remote",
    period: "2019 - 2020",
    type: "Contract",
    description:
      "Contributed to the development of a fintech startup's main application. Focused on creating responsive user interfaces and improving user experience.",
    responsibilities: [
      "Developed responsive React components for the main application",
      "Implemented real-time features using WebSocket connections",
      "Worked with the design team to create pixel-perfect UI implementations",
      "Participated in code reviews and maintained high code quality standards",
    ],
    technologies: ["React", "Redux", "Sass", "Socket.io", "Jest", "Cypress"],
  },
  {
    title: "Junior Web Developer",
    company: "WebSolutions LLC",
    location: "Denver, CO",
    period: "2018 - 2019",
    type: "Full-time",
    description:
      "Started my professional journey as a junior developer, learning and contributing to various web development projects while building foundational skills.",
    responsibilities: [
      "Assisted in developing and maintaining company websites",
      "Fixed bugs and implemented small features under senior guidance",
      "Learned modern web development practices and tools",
      "Participated in team meetings and project planning sessions",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "PHP", "MySQL"],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "California, USA",
    period: "2014 - 2018",
    description:
      "Graduated Magna Cum Laude with a focus on software engineering and web development. Active member of the Computer Science club and hackathon participant.",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Computer Networks",
    ],
  },
  {
    degree: "Frontend Development Bootcamp",
    school: "CodeAcademy Plus",
    location: "Online",
    period: "2018",
    description:
      "Intensive 6-month program focused on modern frontend technologies and best practices.",
    coursework: [
      "React",
      "JavaScript ES6+",
      "CSS Grid & Flexbox",
      "Node.js",
      "Git & GitHub",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-12345",
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    date: "2022",
    credentialId: "GA-67890",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2021",
    credentialId: "META-11111",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
                Experience
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My professional journey and the experiences that shaped my
                career
              </p>
            </motion.div>

            {/* Professional Experience */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="relative">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-2">
                            <CardTitle className="text-2xl flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-primary" />
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col lg:items-end gap-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-2">
                            <CardTitle className="text-xl">
                              {edu.degree}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground">
                              {edu.school}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col lg:items-end gap-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold">
                            Relevant Coursework:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <Badge key={course} variant="outline">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                        <CardDescription>{cert.issuer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            Issued: {cert.date}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            ID: {cert.credentialId}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
