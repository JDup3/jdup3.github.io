import {
  Card,
  CardContent,
  CardHeader,
  AnimatedCardContentWithCode,
} from '@/components/ui/card';

function About() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 font-mono text-sm text-muted-foreground">
          <span className="text-primary">/**</span>
          <span>About me</span>
          <span className="text-primary">*/</span>
        </div>
        <h1 className="font-mono text-3xl font-bold text-foreground">
          <span className="text-accent">class</span>
          <span className="text-foreground"> </span>
          <span className="text-primary">JonathanDupe</span>
          <span className="text-foreground"> extends </span>
          <span className="text-primary">SoftwareArchitect</span>
        </h1>
      </div>

      {/* Terminal Output */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
        <CardContent className="py-4">
          <div className="space-y-1 font-mono text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">whoami</span>
            </div>
            <div className="ml-4 text-foreground">
              Computer Scientist & Software Developer/Architect with expertise
              in building scalable platforms and data pipelines using AWS and
              Python while promoting a culture of learning, growth, and
              innovation.
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-primary">$</span>
              <span className="h-4 w-2 animate-pulse bg-primary"></span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Philosophy */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-warning"></span>
              <span className="font-mono text-xs text-muted-foreground">
                philosophy.md
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground"># Professional Philosophy</p>
              <div className="ml-4 space-y-1">
                <div className="flex text-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Be committed to continuous learning and growth
                  </span>
                </div>
                <div className="flex text-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Pay it forward through mentorship and knowledge sharing
                  </span>
                </div>
                <div className="flex text-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Quality over quantity, correctness over speed
                  </span>
                </div>
                <div className="flex text-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Systems are as scalable and maintainable as the people who
                    build them
                  </span>
                </div>
                <div className="flex text-foreground">
                  <span className="mr-2">-</span>
                  <span className="flex-1">
                    Code can tell a story; write it well
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Interests */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-warning"></span>
              <span className="font-mono text-xs text-muted-foreground">
                interests.js
              </span>
            </div>
          </CardHeader>
          <AnimatedCardContentWithCode
            className="space-y-3"
            cardId="about-interests"
            lines={[
              <>
                <span className="ml-2 text-accent">const</span>
                <span className="text-primary"> interests </span>
                <span className="text-foreground">= [</span>
              </>,
              <>
                <span className="ml-6 text-syntax-string">
                  'Software development'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-syntax-string">
                  'System architecture'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-syntax-string">
                  'Video game development'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-syntax-string">
                  'Tabletop gaming'
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-syntax-string">'3D Printing'</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-syntax-string">'PC Building'</span>
              </>,
              <>
                <span className="ml-2 text-foreground">]</span>
              </>,
            ]}
          />
        </Card>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Backend & Cloud Skills */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-success"></span>
              <span className="font-mono text-xs text-muted-foreground">
                backend.json
              </span>
            </div>
          </CardHeader>
          <AnimatedCardContentWithCode
            className="space-y-3"
            cardId="about-backend-skills"
            lines={[
              <>
                <span className="ml-2 text-foreground">{'{'}</span>
              </>,
              <>
                <span className="ml-6 text-primary">"languages"</span>
                <span className="text-foreground">: [</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"Python"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"TypeScript"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"JavaScript"</span>
              </>,
              <>
                <span className="ml-6 text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">"tools"</span>
                <span className="text-foreground">: [</span>
                <span className="text-syntax-string">"Docker"</span>
                <span className="text-foreground">, </span>
                <span className="text-syntax-string">"Make"</span>
                <span className="text-foreground">, </span>
                <span className="text-syntax-string">"Git"</span>
                <span className="text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">"soft_skills"</span>
                <span className="text-foreground">: [</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"Mentorship"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"Leadership"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">
                  "Documentation"
                </span>
              </>,
              <>
                <span className="ml-6 text-foreground">],</span>
              </>,
              <>
                <span className="ml-6 text-primary">"code_agents"</span>
                <span className="text-foreground">: [</span>
                <span className="text-syntax-string">"Github Copilot"</span>
                <span className="text-foreground">],</span>
              </>,
              <>
                <span className="ml-2 text-foreground">{'}'}</span>
              </>,
            ]}
          />
        </Card>

        {/* Tools & Infrastructure */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-success"></span>
              <span className="font-mono text-xs text-muted-foreground">
                infrastructure.tfvars
              </span>
            </div>
          </CardHeader>
          <AnimatedCardContentWithCode
            className="space-y-3"
            cardId="about-infrastructure"
            lines={[
              <>
                <span className="ml-2 text-primary">infrastructure_stack</span>
                <span className="text-foreground"> = {'{'}</span>
              </>,
              <>
                <span className="ml-6 text-primary">cloud_providers</span>
                <span className="text-foreground"> = [</span>
                <span className="text-syntax-string">"AWS"</span>
                <span className="text-foreground">, </span>
                <span className="text-syntax-string">"GCP"</span>
                <span className="text-foreground">]</span>
              </>,
              <>
                <span className="ml-6 text-primary">iac_tools</span>
                <span className="text-foreground"> = [</span>
                <span className="text-syntax-string">"Terraform"</span>
                <span className="text-foreground">]</span>
              </>,
              <>
                <span className="ml-6 text-primary">deployment</span>
                <span className="text-foreground"> = [</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">
                  "Github Actions"
                </span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"Jenkins"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-6 text-foreground">]</span>
              </>,
              <>
                <span className="ml-6 text-primary">qa_tools</span>
                <span className="text-foreground"> = [</span>
                <span className="text-syntax-string">"pytest"</span>
                <span className="text-foreground">]</span>
              </>,
              <>
                <span className="ml-6 text-primary">monitoring</span>
                <span className="text-foreground"> = [</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"grafana"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"prometheus"</span>
                <span className="text-foreground">,</span>
              </>,
              <>
                <span className="ml-10 text-syntax-string">"cloudwatch"</span>
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
      </div>
    </div>
  );
}

export default About;
