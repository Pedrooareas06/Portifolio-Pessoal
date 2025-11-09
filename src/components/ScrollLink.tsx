interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ScrollLink = ({ href, children }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-scale"
    >
      {children}
    </a>
  );
};
