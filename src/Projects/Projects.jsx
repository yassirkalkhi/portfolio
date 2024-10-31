import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "chat-with-ollama",
      description:
        "A dynamic web-based chatbot platform that allows users to engage in interactive conversations with the Ollama Large Language Model.",
      image: "./project1.png",
      tech: ["React", "Tailwind", "Api"],
      link: "https://github.com/yassirkalkhi/chat-with-ollama",
      duration: "1 week",
      date: "Jan 2024 - Jun 2024",
    },
    {
      title: "telegram-chatbot",
      description:
        "Telegram chatbot that allows users to engage in interactive conversations with the advanced LLaMA 3 model. Built with the groq-sdk and GROQ API.",
      image: "./project1.png",
      tech: ["React", "Tailwind", "Api", "telegraf lib"],
      link: "https://github.com/yassirkalkhi/telegram-chatbot",
      duration: "1 week",
      date: "Jan 2024 - Jun 2024",
    },
    {
      title: "bicycle-rental",
      description:
        "A fully responsive and user-friendly bicycle rental platform designed to streamline the process of renting bikes online",
      image: "./project1.png",
      tech: [],
      link: "https://github.com/yassirkalkhi/bicycle-rental",
      duration: "In Progress",
      date: "Oct 2024",
    },
  ];

  const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"];

  return (
    <main className="flex flex-col items-center text-start min-h-screen pt-20">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] text-start">
        <p
          className="text-white text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"
          style={{ textShadow: "0px 0px 2px rgba(255, 255, 255, 0.7)" }}
        >
          Projects & Work
        </p>
        <h1 className="text-md ms-1 my-2  text-white/60">
          Showcasing some of my projects and work
        </h1>
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] h-auto rounded-lg border border-white/10 mt-8 mb-8">
        <div className="flex w-full justify-between rounded border-b border-white/10">
          {/* Left side - Profile */}
          <div className="flex w-full sm:w-[40%] md:w-[40%] lg:w-[30%] xl:w-[20%] items-center gap-2 p-4 md:gap-4">
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
              <AvatarImage src="../assets/user.jpg" alt="Profile picture" />
              <AvatarFallback>YK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 md:gap-1 min-w-0">
              <h1 className="text-white/80 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                Yassir Kalkhi
              </h1>
              <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Right side - Status */}
          <div className="hidden sm:flex items-center gap-2 p-4  border-white/10">
            <div className="hidden sm:flex flex-col items-end">
              <p className="text-white/80 text-xs sm:text-sm md:text-base font-medium">
                Project Showcase
              </p>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/60 text-[10px] sm:text-xs md:text-sm">
                    {projects.length} Projects
                  </span>
                </span>
                <span className="text-white/40 text-[10px] sm:text-xs md:text-sm">
                  •{" "}
                  {projects.filter((p) => p.duration === "In Progress").length}{" "}
                  In Progress
                </span>
              </div>
            </div>
            <div className="sm:hidden flex items-center gap-1.5">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-white/60 text-[10px]">
                {projects.length} Projects
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[80%] flex flex-col  md:flex-row ">
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-[#09090b] border-white/20"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-white">
                        {project.title}
                      </CardTitle>
                      <div className="text-right">
                        <p className="text-sm font-medium text-white/80">
                          {project.duration}
                        </p>
                        <p className="text-xs text-white/80">{project.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
