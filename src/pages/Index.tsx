import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Target, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Crystal Clear Goals",
      description: "Transform vague ideas into actionable projects with laser-focused clarity",
      gradient: "from-chart-1 to-chart-3"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create tasks in seconds, update in real-time, and never miss a beat",
      gradient: "from-chart-3 to-chart-5"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Watch your projects evolve from idea to completion with visual tracking",
      gradient: "from-chart-5 to-chart-2"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-card/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight">TaskMaster</span>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Simple. Powerful. Effective.
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none animate-fade-in">
            Manage Projects
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-3 bg-clip-text text-transparent">
              Like a Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            TaskMaster helps you organize your work, track progress, and achieve your goals with an intuitive interface designed for modern teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in">
            <Button asChild size="lg" className="text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all">
              <Link to="/auth">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-12">
              <Link to="/auth">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for individuals and teams who want to get things done without the complexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-chart-1 to-chart-3 p-12 md:p-16 text-center shadow-2xl">
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
                Ready to Get Organized?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of users who have transformed the way they work with TaskMaster
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base px-8 h-12 shadow-lg hover:scale-105 transition-transform">
                <Link to="/auth">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold">TaskMaster</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 TaskMaster. Built with passion for productivity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
