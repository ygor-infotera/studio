import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import OfflineIndicator from "./offline-indicator";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/alerts", label: "Alertas" },
  { href: "/report", label: "Reportar Evento" },
  { href: "/evacuate", label: "Plano de Evacuação" },
  { href: "/shelters", label: "Abrigos" },
  { href: "/guidelines", label: "Guias de Emergência" },
];

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ShieldAlert className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">AlertaNatura</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href} className="text-sm font-medium text-foreground hover:text-primary">
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <OfflineIndicator />
          {/* Mobile Menu Trigger (optional, for future enhancement) */}
          {/* <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button> */}
        </div>
      </div>
    </header>
  );
}
