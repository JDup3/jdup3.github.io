import {
  Card,
  CardContent,
  CardHeader,
  AnimatedCardContentWithCode,
} from '../components/ui/card';

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
          <span className="text-primary">JonathanDupe</span>
          <span className="text-foreground"> extends </span>
          <span className="text-primary">SoftwareArchitect</span>
        </h1>
      </div>

      {/* Terminal Output */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="py-4">
          <div className="font-mono text-sm space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">whoami</span>
            </div>
            <div className="text-foreground ml-4">
              Computer Scientist & Software Developer/Architect with expertise
              in building scalable platforms and data pipelines using AWS and
              Python while promoting a culture of learning, growth, and
              innovation.
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-primary">$</span>
              <span className="w-2 h-4 bg-primary animate-pulse"></span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Backend & Cloud Skills */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                backend.py
              </span>
            </div>
          </CardHeader>
          <AnimatedCardContentWithCode
            className="space-y-3"
            lines={[
              <>
                <span className="ml-2 text-accent">export const</span>
                <span className="text-primary"> skills </span>
                <span className="text-foreground">= {'{'}</span>
              </>,
              <>
                <span className="ml-6 text-primary">languages</span>
                <span className="text-foreground">: [</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'Python'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'TypeScript'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'JavaScript'</span>
              </>,
              <>
                <span className="ml-6 text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">tools</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">'Docker'</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">'Make'</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">'Git'</span>
                <span className="text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">softskills</span>
                <span className="text-foreground">: [</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'Mentorship'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'Leadership'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-green-400">'Documentation'</span>
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

        {/* Tools & Infrastructure */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                infrastructure.json
              </span>
            </div>
          </CardHeader>
          <AnimatedCardContentWithCode
            className="space-y-3"
            lines={[
              <>
                <span className="ml-2 text-foreground">{'{'}</span>
              </>,
              <>
                <span className="ml-6 text-primary">"cloud"</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">"AWS"</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">"GCP"</span>
                <span className="text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">
                  "infrastructure_as_code"
                </span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">"Terraform"</span>
                <span className="text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">"deployment"</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">"Github Actions"</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">"Jenkins"</span>
                <span className="text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">"databases"</span>
                <span className="text-foreground">: {'{'}</span>
              </>,
              <>
                <span className="ml-10 text-primary">"no_sql"</span>
                <span className="text-foreground">: [</span>
              </>,
              <>
                <span className="ml-14 text-green-400">"DynamoDB"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-14 text-green-400">"OpenSearch"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-14 text-green-400">"Redis"</span>
              </>,
              <>
                <span className="ml-10 text-foreground">],</span>
              </>,
              <>
                <span className="ml-10 text-primary">"sql"</span>
                <span className="text-foreground">: [</span>
                <span className="text-green-400">"PostgreSQL"</span>
                <span className="text-foreground">, </span>
                <span className="text-green-400">"MySQL"</span>
                <span className="text-foreground">]</span>
              </>,
              <>
                <span className="ml-6 text-foreground">{'}'}</span>
              </>,
              <>
                <span className="ml-2 text-foreground">{'}'}</span>
              </>,
            ]}
          />
        </Card>
      </div>

      {/* Personal Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Interests */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                interests.js
              </span>
            </div>
          </CardHeader>
          <AnimatedCardContentWithCode
            className="space-y-3"
            lines={[
              <>
                <span className="ml-2 text-accent">const</span>
                <span className="text-primary"> interests </span>
                <span className="text-foreground">= [</span>
              </>,
              <>
                <span className="ml-6 text-green-400">
                  'Software development'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-green-400">
                  'System architecture'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-green-400">
                  'Video game development'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-green-400">'Tabletop gaming'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-green-400">'3D Printing'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-green-400">'PC Building'</span>
              </>,
              <>
                <span className="ml-2 text-foreground">]</span>
              </>,
            ]}
          />
        </Card>
        {/* Philosophy */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-warning rounded-full"></span>
              <span className="text-xs font-mono text-muted-foreground ml-2">
                philosophy.md
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground"># Professional Philosophy</p>
              <div className="space-y-1 ml-4">
                <div className="text-foreground flex">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Passionate about building efficient, scalable, and
                    maintainable software solutions
                  </span>
                </div>
                <div className="text-foreground flex">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Committed to continuous learning and growth
                  </span>
                </div>
                <div className="text-foreground flex">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Pay it forward through mentorship and knowledge sharing
                  </span>
                </div>
                <div className="text-foreground flex">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Quality over quantity, correctness over speed
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-2 text-muted-foreground">
              <div className="text-xs flex">
                <span className="text-primary mr-2">{'>'}</span>
                <span className="flex-1">
                  Passionate, motivated, enthusiastic, optimistic, and
                  data-driven software architect
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default About;
