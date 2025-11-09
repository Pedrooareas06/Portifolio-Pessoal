import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  tech: {
    name: string;
    description: string;
    category: string;
  };
}

export const TechModal = ({ isOpen, onClose, tech }: TechModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{tech.name}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {tech.category}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-foreground leading-relaxed">{tech.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
