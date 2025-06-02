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

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "HTML5",
    "CSS3",
  ],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "tRPC"],
  "Tools & Others": [
    "Git",
    "Docker",
    "Figma",
    "Adobe Creative Suite",
    "AWS",
    "Vercel",
  ],
};

export default function About() {
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
                About Me
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get to know the person behind the code and design
              </p>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-1">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl"></div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-serif font-bold">
                  Hello, I'm [Your Name]
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    I'm a passionate full-stack developer and designer with over
                    5 years of experience creating digital experiences that are
                    both beautiful and functional. My journey in technology
                    began with a curiosity about how things work, which quickly
                    evolved into a love for building them.
                  </p>
                  <p>
                    I specialize in modern web technologies like React, Next.js,
                    and TypeScript, but I'm always eager to learn new tools and
                    frameworks. I believe that great design and solid code go
                    hand in hand to create exceptional user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new design
                    trends, contributing to open-source projects, or enjoying
                    the great outdoors with my camera in hand.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-center">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="text-xl">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-center">
                Experience
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Senior Frontend Developer",
                    company: "Tech Company Inc.",
                    period: "2022 - Present",
                    description:
                      "Lead frontend development for multiple high-traffic web applications using React and Next.js.",
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Agency",
                    period: "2020 - 2022",
                    description:
                      "Developed and maintained client websites and web applications using modern tech stack.",
                  },
                  {
                    title: "Junior Developer",
                    company: "Startup Company",
                    period: "2019 - 2020",
                    description:
                      "Contributed to various projects while learning and growing as a developer.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          <CardDescription className="text-lg">
                            {job.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-center">
                Education
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Bachelor of Science in Computer Science
                  </CardTitle>
                  <CardDescription className="text-lg">
                    University Name
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">
                      Graduated with honors, specializing in web development and
                      software engineering.
                    </p>
                    <Badge variant="outline">2015 - 2019</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-center">
                Interests & Hobbies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Photography",
                  "Open Source",
                  "Travel",
                  "Design",
                  "Gaming",
                  "Cooking",
                  "Reading",
                  "Fitness",
                ].map((interest) => (
                  <div
                    key={interest}
                    className="text-center p-4 rounded-lg bg-muted/30"
                  >
                    <p className="font-medium">{interest}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
