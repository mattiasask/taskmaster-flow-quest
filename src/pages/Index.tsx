import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Target, TrendingUp, ArrowRight, Sparkles, ListChecks, Users, Clock } from "lucide-react";

const Index = () => {
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

      {/* Features Section - Creative Layout */}
      <section className="container mx-auto px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Main Feature - Large Diagonal */}
          <div className="relative mb-16 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-chart-1/10 to-transparent rounded-[3rem] transform -rotate-1" />
            <div className="relative bg-card border border-border rounded-[3rem] p-12 md:p-16 overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary to-chart-1 shadow-2xl">
                    <Target className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-5xl font-bold tracking-tight leading-tight">
                    Projects That
                    <br />
                    <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                      Make Sense
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Create unlimited projects with custom workflows. Organize your tasks exactly the way your brain works, not how some app thinks you should work.
                  </p>
                </div>
                <div className="relative">
                  <div className="space-y-4">
                    <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 transform translate-x-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-chart-1" />
                        <span className="font-semibold">Website Redesign</span>
                      </div>
                      <div className="text-sm text-muted-foreground">12 tasks • 60% complete</div>
                    </div>
                    <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-chart-3" />
                        <span className="font-semibold">Marketing Campaign</span>
                      </div>
                      <div className="text-sm text-muted-foreground">8 tasks • 25% complete</div>
                    </div>
                    <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 transform translate-x-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full bg-chart-5" />
                        <span className="font-semibold">Product Launch</span>
                      </div>
                      <div className="text-sm text-muted-foreground">15 tasks • 80% complete</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-chart-1/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Two Column Asymmetric */}
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {/* Left - Tall */}
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="h-full bg-gradient-to-br from-chart-3 to-chart-5 rounded-3xl p-10 text-primary-foreground relative overflow-hidden shadow-xl">
                <Zap className="w-16 h-16 mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  Real-Time
                  <br />
                  Updates
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                  See changes instantly. No refresh needed. Your team stays in perfect sync.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Syncs in milliseconds</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Right - Stacked */}
            <div className="md:col-span-3 space-y-8">
              <div className="bg-card border border-border rounded-3xl p-10 shadow-lg animate-fade-in hover:shadow-2xl transition-shadow" style={{ animationDelay: '200ms' }}>
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-chart-1 to-chart-3 shadow-lg flex-shrink-0">
                    <ListChecks className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">Smart Task Management</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Drag, drop, and organize. Set priorities, deadlines, and track every detail without the overwhelm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl p-10 shadow-lg animate-fade-in hover:shadow-2xl transition-shadow" style={{ animationDelay: '300ms' }}>
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-chart-5 to-chart-2 shadow-lg flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">Visual Progress Tracking</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Beautiful charts and insights show you exactly where you stand. Celebrate wins, spot bottlenecks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom - Wide Feature */}
          <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="bg-gradient-to-r from-muted via-accent to-muted rounded-3xl p-12 border border-border shadow-lg">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="inline-flex p-5 rounded-2xl bg-card border border-border shadow-lg">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-4xl font-bold tracking-tight">
                  Built for Teams, Perfect for Individuals
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Whether you're flying solo or managing a crew, TaskMaster scales with you. Simple enough for anyone, powerful enough for everything.
                </p>
              </div>
            </div>
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
