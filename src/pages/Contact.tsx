import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';

function Contact() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm font-mono text-muted-foreground">
          <span className="text-primary">import</span>
          <span className="text-foreground">{'{'}</span>
          <span className="text-accent">contact</span>
          <span className="text-foreground">{'}'}</span>
          <span className="text-primary">from</span>
          <span className="text-green-400">'./jdup3'</span>
        </div>
        <h1 className="text-3xl font-mono font-bold text-foreground">
          <span className="text-accent">async function</span>
          <span className="text-foreground"> </span>
          <span className="text-primary">getInTouch</span>
          <span className="text-foreground">()</span>
        </h1>
      </div>

      {/* Contact Methods */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Links */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-destructive rounded-full"></span>
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                links.ts
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center justify-between p-3 border border-border/50 rounded bg-background/50">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">github</span>
                  <span className="text-muted-foreground">:</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="font-mono text-xs"
                >
                  <a
                    href="https://github.com/JDup3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JDup3
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border border-border/50 rounded bg-background/50">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">email</span>
                  <span className="text-muted-foreground">:</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="font-mono text-xs"
                >
                  <a href="mailto:contact@jdup3.dev">contact@jdup3.dev</a>
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 border border-border/50 rounded bg-background/50">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">website</span>
                  <span className="text-muted-foreground">:</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="font-mono text-xs"
                >
                  <a
                    href="https://jdup3.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jdup3.github.io
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interests */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-destructive rounded-full"></span>
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                interests.js
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-1">
              <div>
                <span className="text-muted-foreground">1</span>
                <span className="ml-2 text-accent">const</span>
                <span className="text-primary"> interests </span>
                <span className="text-foreground">= [</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">2</span>
                <span className="ml-2 text-green-400">
                  'React applications'
                </span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">3</span>
                <span className="ml-2 text-green-400">
                  'TypeScript development'
                </span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">4</span>
                <span className="ml-2 text-green-400">
                  'Performance optimization'
                </span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">5</span>
                <span className="ml-2 text-green-400">'Developer tooling'</span>
                <span className="text-foreground">,</span>
              </div>
              <div className="ml-4">
                <span className="text-muted-foreground">6</span>
                <span className="ml-2 text-green-400">'Open source'</span>
              </div>
              <div>
                <span className="text-muted-foreground">7</span>
                <span className="ml-2 text-foreground">]</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-destructive rounded-full"></span>
            <span className="w-3 h-3 bg-warning rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              README.md
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 font-mono text-sm">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              # Let's Build Something Together
            </p>
            <div className="space-y-1 ml-0 text-foreground">
              <p>Always excited to discuss:</p>
              <p className="ml-2">- Interesting projects and opportunities</p>
              <p className="ml-2">- Modern web development challenges</p>
              <p className="ml-2">- Collaboration on open source</p>
              <p className="ml-2">- Tech discussions and knowledge sharing</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terminal */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="py-4">
          <div className="font-mono text-sm space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">
                echo "Looking forward to hearing from you!"
              </span>
            </div>
            <div className="text-accent ml-4">
              Looking forward to hearing from you!
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

export default Contact;
