import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  //push lang
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <h2 className="text-xl font-bold text-primary">
          Technical Customer
          <br />
          Support Assessment
        </h2>
        <nav className="hidden md:flex gap-6">
          {[
            "site",
            "feedback",
            "activities",
            "docs",
            "dns",
            "troubleshoot",
            "redirect",
            "serverless",
            "security",
          ].map((section) => (
            <Button
              key={section}
              variant="ghost"
              onClick={() => scrollToSection(section)}
              className="text-sm capitalize"
            >
              {section}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
