import { Card, CardContent, CardHeader } from '../components/ui/card';

function About() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm font-mono text-muted-foreground">
          <span className="text-primary">/**</span>
          <span>About me</span>
          <span className="text-primary">*/</span>
        </div>
        <h1 className="text-3xl font-mono font-bold text-foreground">
          <span className="text-accent">class</span>
          <span className="text-foreground"> </span>
          <span className="text-primary">Developer</span>
          <span className="text-foreground"> extends </span>
          <span className="text-primary">Human</span>
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Frontend Skills */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-destructive rounded-full"></span>
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                frontend.ts
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-1">
              <div>
                <span className="text-muted-foreground">1</span>
                <span className="ml-2 text-accent">export const</span>
                <span className="text-primary"> skills </span>
                <span className="text-foreground">= {'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">2</span>
                <span className="ml-2 text-primary">frameworks</span>
                <span className="text-foreground">: [</span>
              </div>
              <div className="ml-8">
                <span className="text-muted-foreground">3</span>
                <span className="ml-2 text-green-400">'React'</span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-8">
                <span className="text-muted-foreground">4</span>
                <span className="ml-2 text-green-400">'TypeScript'</span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-8">
                <span className="text-muted-foreground">5</span>
                <span className="ml-2 text-green-400">'Vite'</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">6</span>
                <span className="ml-2 text-foreground">],</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">7</span>
                <span className="ml-2 text-primary">styling</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">'Tailwind'</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">'shadcn/ui'</span>
                <span className="text-foreground">]</span>
              </div>
              <div>
                <span className="text-muted-foreground">8</span>
                <span className="ml-2 text-foreground">{'}'}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-destructive rounded-full"></span>
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                tools.json
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-1">
              <div>
                <span className="text-muted-foreground">1</span>
                <span className="ml-2 text-foreground">{'{'}</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">2</span>
                <span className="ml-2 text-primary">"editor"</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"VS Code"</span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">3</span>
                <span className="ml-2 text-primary">"version_control"</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"Git"</span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">4</span>
                <span className="ml-2 text-primary">"testing"</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"Vitest"</span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">5</span>
                <span className="ml-2 text-primary">"deployment"</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"GitHub Actions"</span>
              </div>
              <div>
                <span className="text-muted-foreground">6</span>
                <span className="ml-2 text-foreground">{'}'}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Philosophy */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-destructive rounded-full"></span>
            <span className="w-3 h-3 bg-warning rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              philosophy.md
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 font-mono text-sm">
          <div className="space-y-2">
            <p className="text-muted-foreground"># Development Philosophy</p>
            <div className="space-y-1 ml-4">
              <p className="text-foreground">
                - Write clean, maintainable code
              </p>
              <p className="text-foreground">- Follow modern best practices</p>
              <p className="text-foreground">- Continuous learning mindset</p>
              <p className="text-foreground">- Focus on user experience</p>
            </div>
          </div>
          <div className="pt-2 text-muted-foreground">
            <p className="text-xs">
              <span className="text-primary">{'>'}</span> Passionate about
              building efficient, scalable applications
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Terminal Output */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="py-4">
          <div className="font-mono text-sm space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">whoami</span>
            </div>
            <div className="text-foreground ml-4">
              Full-stack developer focused on modern web technologies and
              exceptional user experiences.
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-primary">$</span>
              <span className="w-2 h-4 bg-primary animate-pulse"></span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
