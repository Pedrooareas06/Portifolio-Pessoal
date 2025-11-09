import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    liveLink: string;
    repoLink: string;
  };
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <p className="text-foreground leading-relaxed">{project.description}</p>
          <div>
            <h4 className="font-semibold mb-2">Tecnologias Utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <Button asChild className="flex-1">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Projeto
              </a>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Repositório
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
