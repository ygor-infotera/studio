import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  iconColor?: string;
}

export default function FeatureCard({ title, description, href, Icon, iconColor = "text-primary" }: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className={`rounded-lg p-3 bg-primary/10 ${iconColor}`}>
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <CardTitle className="text-xl font-headline">{title}</CardTitle>
          <CardDescription className="mt-1 text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <Button asChild className="w-full mt-auto">
          <Link href={href}>
            Acessar <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
