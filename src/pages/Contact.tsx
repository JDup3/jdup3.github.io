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
                  <a href="mailto:dupjon277@gmail.com">dupjon277@gmail.com</a>
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

        {/* Message */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
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
              <div className="text-foreground">
                <p className="mb-2">Always excited to discuss:</p>
                <div className="space-y-1 ml-4">
                  <div className="text-foreground flex">
                    <span className="mr-2">-</span>
                    <span className="flex-1">
                      Software architecture and scalable systems
                    </span>
                  </div>
                  <div className="text-foreground flex">
                    <span className="mr-2">-</span>
                    <span className="flex-1">
                      AWS cloud solutions and infrastructure
                    </span>
                  </div>
                  <div className="text-foreground flex">
                    <span className="mr-2">-</span>
                    <span className="flex-1">
                      Technical leadership opportunities
                    </span>
                  </div>
                  <div className="text-foreground flex">
                    <span className="mr-2">-</span>
                    <span className="flex-1">
                      Hardware tinkering and game development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

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
