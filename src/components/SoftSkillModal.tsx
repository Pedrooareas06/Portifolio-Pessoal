import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface SoftSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: {
    name: string;
    description: string;
    icon: LucideIcon;
  };
}

export const SoftSkillModal = ({ isOpen, onClose, skill }: SoftSkillModalProps) => {
  const Icon = skill.icon;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold">{skill.name}</DialogTitle>
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            Soft Skill
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-foreground leading-relaxed">{skill.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
