import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Link,
  Code,
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  Star,
  Clock,
  Zap,
  Shield,
  Calendar,
  Smartphone,
} from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project = projects.find(project => project.slug == slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="font-bold text-xl text-white flex items-center"
            >
              <Code className="mr-2 h-6 w-6" />
              Asitha Lakshan
            </Link>
            <Link href="/#projects">
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-1">
              {project.title}
            </h1>
            <h2 className="text-4xl sm:text-xl lg:text-2xl font-normal text-gray-500 mb-6">
              {`(${project.category})`}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </a>
              </Button>
              {project.github && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Stats */}
      {project.stats && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {project.stats.users}
                  </div>
                  <div className="text-slate-400">Active Users</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {project.stats.rating}
                  </div>
                  <div className="text-slate-400">User Rating</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {project.stats.duration}
                  </div>
                  <div className="text-slate-400">Development Time</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    Project Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-invert max-w-none">
                    {project.longDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-slate-300 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Zap className="mr-2 h-6 w-6 text-yellow-400" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technical Challenges */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Shield className="mr-2 h-6 w-6 text-red-400" />
                    Technical Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(project.technologies).map(
                      ([category, techs]) => (
                        <div key={category}>
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              {project.stats && <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Project Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.stats?.duration && (
                    <div className="flex items-center text-slate-300">
                      <Calendar className="h-4 w-4 mr-3 text-blue-400" />
                      <span>Duration: {project.stats.duration}</span>
                    </div>
                  )}
                  {project.stats?.users && (
                    <div className="flex items-center text-slate-300">
                      <Users className="h-4 w-4 mr-3 text-green-400" />
                      <span>Users: {project.stats.users}</span>
                    </div>
                  )}
                  {project.stats?.rating && (
                    <div className="flex items-center text-slate-300">
                      <Star className="h-4 w-4 mr-3 text-yellow-400" />
                      <span>Rating: {project.stats.rating}/5.0</span>
                    </div>
                  )}
                  {project.stats.isMobileResponsive && <div className="flex items-center text-slate-300">
                    <Smartphone className="h-4 w-4 mr-3 text-purple-400" />
                    <span>Mobile Responsive</span>
                  </div>}
                </CardContent>
              </Card>}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Demo
                  </a>
                </Button>
                {project.github && (
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Asitha Lakshan. Built with Next.js and Tailwind CSS.
          </p>
          {/* <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
