import {
  Card,
  CardContent,
  CardHeader,
  AnimatedCardContentWithCode,
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
        <h1 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-foreground">
          <span className="text-accent">class</span>
          <span className="text-foreground"> </span>
          <span className="text-primary">JonathanDupe</span>
          <span className="text-foreground">(</span>
          <span className="text-primary">SoftwareArchitect</span>
          <span className="text-foreground">):</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-mono max-w-6xl">
          """ Lead Software Developer with 7+ years of experience architecting
          and developing scalable systems with AWS, Python, modern web
          technologies, and Machine Learning & AI. Passionate about building
          efficient, data-driven solutions, while learning as much as possible
          along the way. """
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
          <AnimatedCardContentWithCode
            className="space-y-3"
            typingSpeed={15}
            lineDelay={150}
            cardId="home-about-me"
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
                <span className="ml-6 text-primary">topSkills</span>
                <span className="text-foreground">: [</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'System Design'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-green-400">
                  'Technical Product Management'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'MLOps'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-foreground">]</span>
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
                current_project.md
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">#</span> Current Experience
              </p>
              <div className="space-y-1 ml-4">
                <p className="text-foreground">
                  <span className="text-primary">## **</span>Pendulum Intel
                  <span className="text-primary">**</span> - Lead Software
                  Developer
                </p>
                <div className="text-foreground flex text-muted-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Architecting and developing a Big Data Social Media
                    Listening Platform and Analytics Tools in AWS
                  </span>
                </div>
                <div className="text-foreground flex text-muted-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Providing mentorship and technical leadership to a team of
                    developers
                  </span>
                </div>
                <div className="text-foreground flex text-muted-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Collaborating with cross-functional teams to align on
                    product vision and technical requirements
                  </span>
                </div>
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
                  <span className="text-primary">$</span> git clone profile
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
              <span>WSL: Ubuntu 22.04</span>
              <span>portfolio-deployment*</span>
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span>Python 3.13</span>
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
