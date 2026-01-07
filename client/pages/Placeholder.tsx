import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">🏗️</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            {description ||
              `This page is coming soon! Help us build this feature by providing feedback and suggestions.`}
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 btn-gold px-6 py-3 rounded-lg font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
