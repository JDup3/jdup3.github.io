import {
  Card,
  CardContent,
  CardHeader,
  CardContentWithCode,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm font-mono text-muted-foreground">
          <span className="text-primary"># Personal Portfolio</span>
        </div>
        <h1 className="text-3xl font-mono font-bold text-foreground">
          <span className="text-accent">class</span>
          <span className="text-foreground"> </span>
          <span className="text-primary">JonathanDupe</span>
          <span className="text-foreground">(</span>
          <span className="text-primary">SoftwareArchitect</span>
          <span className="text-foreground">):</span>
        </h1>
        <p className="text-lg text-muted-foreground font-mono max-w-6xl">
          """ Lead Software Developer with 7+ years of experience architecting
          and developing scalable systems with AWS, Python, and modern web
          technologies. Passionate about building efficient, data-driven
          solutions, while learning as much as possible along the way. """
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                about_me.ts
              </span>
            </div>
          </CardHeader>
          <CardContentWithCode
            className="space-y-3"
            lines={[
              <>
                <span className="ml-2 text-accent">interface</span>
                <span className="text-primary"> Developer </span>
                <span className="text-foreground">{'{'}</span>
              </>,
              <>
                <span className="ml-6 text-primary">name</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">'Jonathan Dupe'</span>
              </>,
              <>
                <span className="ml-6 text-primary">role</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">
                  'Lead Software Developer'
                </span>
              </>,
              <>
                <span className="ml-6 text-primary">stack</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">'Python'</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">'AWS'</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">'TypeScript'</span>
                <span className="text-foreground">]</span>
              </>,
              <>
                <span className="ml-2 text-foreground">{'}'}</span>
              </>,
            ]}
          />
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                current_project.tsx
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h3 className="font-mono text-sm text-primary">
                Current Experience
              </h3>
              <div className="space-y-1 text-sm font-mono">
                <p className="text-foreground">
                  Pendulum Intel - Senior Software Developer
                </p>
                <p className="text-muted-foreground">
                  Architecting and Developing a Big Data Social Media Listening
                  Platform and Analytics Tools in AWS
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
              <span>React 18.2.0</span>
              <span>TypeScript 5.2.2</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
