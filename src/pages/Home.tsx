import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-mono text-muted-foreground">
            <span className="text-primary">1</span>
            <span className="text-accent">const</span>
            <span className="text-primary">developer</span>
            <span className="text-foreground">=</span>
            <span className="text-green-400">'JDup3'</span>
          </div>
          <h1 className="text-4xl font-mono font-bold text-foreground">
            <span className="text-muted-foreground">// </span>
            <span className="text-primary">Welcome</span>
            <span className="text-foreground"> to my </span>
            <span className="text-accent">portfolio</span>
          </h1>
        </div>
        <p className="text-lg text-muted-foreground font-mono max-w-2xl">
          Building efficient, scalable applications with modern web
          technologies. Passionate about clean code and exceptional user
          experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-destructive rounded-full"></span>
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                about_me.ts
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-1">
              <span className="text-muted-foreground">1</span>
              <span className="ml-2 text-accent">interface</span>
              <span className="text-primary"> Developer </span>
              <span className="text-foreground">{'{'}</span>
            </div>
            <div className="space-y-1 ml-4">
              <div>
                <span className="text-muted-foreground">2</span>
                <span className="ml-2 text-primary">name</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">'JDup3'</span>
              </div>
              <div>
                <span className="text-muted-foreground">3</span>
                <span className="ml-2 text-primary">focus</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">'Full-Stack Development'</span>
              </div>
              <div>
                <span className="text-muted-foreground">4</span>
                <span className="ml-2 text-primary">stack</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">'React'</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">'TypeScript'</span>
                <span className="text-foreground">]</span>
              </div>
            </div>
            <div>
              <span className="text-muted-foreground">5</span>
              <span className="ml-2 text-foreground">{'}'}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-destructive rounded-full"></span>
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                current_project.tsx
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h3 className="font-mono text-sm text-primary">
                Featured Project
              </h3>
              <div className="space-y-1 text-sm font-mono">
                <p className="text-foreground">
                  React Portfolio with shadcn/ui
                </p>
                <p className="text-muted-foreground">
                  Built with Vite, TypeScript, and Tailwind CSS
                </p>
              </div>
            </div>
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="font-mono text-xs"
              >
                <a
                  href="https://github.com/JDup3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">$</span> git clone portfolio
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status Bar */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="py-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available for work</span>
              </span>
              <span>React 18.2.0</span>
              <span>TypeScript 5.2.2</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Ln 42, Col 16</span>
              <span>UTF-8</span>
              <span className="text-primary">TSX</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
