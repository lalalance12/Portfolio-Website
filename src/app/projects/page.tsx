"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
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

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics dashboard with AI insights, interactive charts, and data visualization.",
    image: "/api/placeholder/600/400",
    tags: ["React", "D3.js", "Python", "FastAPI", "Machine Learning"],
    category: "Frontend",
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/api/placeholder/600/400",
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB"],
    category: "Mobile",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "A modern social media platform with real-time messaging, content sharing, and user interactions.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "AWS"],
    category: "Full Stack",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with smooth animations and modern design principles.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "Frontend",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 6,
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication, real-time updates, and team collaboration.",
    image: "/api/placeholder/600/400",
    tags: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
    category: "Backend",
    featured: false,
    github: "https://github.com",
    live: "https://example.com",
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my creative work and technical expertise across
                various domains
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Featured Projects */}
            {selectedCategory === "All" && (
              <motion.div variants={fadeInUp} className="space-y-8">
                <h2 className="text-3xl font-serif font-bold text-center">
                  Featured Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projects
                    .filter((p) => p.featured)
                    .map((project) => (
                      <motion.div key={project.id} variants={fadeInUp}>
                        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                          </div>
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <CardTitle className="text-2xl">
                                  {project.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                  {project.description}
                                </CardDescription>
                              </div>
                              <Badge variant="secondary">
                                {project.category}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-3">
                                <Button asChild size="sm" className="group">
                                  <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                  </a>
                                </Button>
                                <Button asChild variant="outline" size="sm">
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}

            {/* All Projects Grid */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-center">
                {selectedCategory === "All"
                  ? "All Projects"
                  : `${selectedCategory} Projects`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={fadeInUp}>
                    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">
                            {project.title}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <CardDescription className="line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.tags.length - 3}
                              </Badge>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="flex-1"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                            <Button asChild size="sm" className="flex-1">
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-6 py-16"
            >
              <h2 className="text-3xl font-serif font-bold">
                Interested in collaborating?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting
                projects.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
