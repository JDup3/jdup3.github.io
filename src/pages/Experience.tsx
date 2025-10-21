import {
  Card,
  CardContent,
  CardHeader,
  AnimatedCardContentWithCode,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

function Experience() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm font-mono text-muted-foreground">
          <span className="text-primary">import</span>
          <span className="text-foreground">{'{'}</span>
          <span className="text-accent">experience</span>
          <span className="text-foreground">{'}'}</span>
          <span className="text-primary">from</span>
          <span className="text-green-400">'./career-journey'</span>
        </div>
        <h1 className="text-3xl font-mono font-bold text-foreground">
          <span className="text-accent">const</span>
          <span className="text-foreground"> </span>
          <span className="text-primary">professionalJourney</span>
          <span className="text-foreground"> = </span>
          <span className="text-accent">await</span>
          <span className="text-foreground"> getExperience()</span>
        </h1>
      </div>

      {/* Work Experience */}
      <div className="space-y-6">
        <h2 className="text-xl font-mono font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Work Experience
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Position */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  current_role.py
                </span>
              </div>
            </CardHeader>
            <AnimatedCardContentWithCode
              className="space-y-3"
              cardId="experience-current-role"
              lines={[
                <>
                  <span className="ml-2 text-accent">class</span>
                  <span className="text-primary"> CurrentRole</span>
                  <span className="text-foreground">:</span>
                </>,
                <>
                  <span className="ml-6 text-primary">company</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-green-400">"Pendulum Intel"</span>
                </>,
                <>
                  <span className="ml-6 text-primary">position</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-green-400">
                    "Lead Software Developer"
                  </span>
                </>,
                <>
                  <span className="ml-6 text-primary">duration</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-green-400">"2023 - Present"</span>
                </>,
                <>
                  <span className="ml-6 text-primary">focus</span>
                  <span className="text-foreground"> = [</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Big Data Platforms"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Leadership and Mentorship"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "System Design and Architecture"
                  </span>
                </>,
                <>
                  <span className="ml-6 text-foreground">]</span>
                </>,
                <>
                  <span className="ml-6 text-primary">achievements</span>
                  <span className="text-foreground"> = [</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Realtime ML Enrichment Pipeline"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Realtime Smart Social Alerting System"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Company Munch and Learns"
                  </span>
                </>,
                <>
                  <span className="ml-6 text-foreground">]</span>
                </>,
              ]}
            />
          </Card>

          {/* Previous Role */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  previous_role.py
                </span>
              </div>
            </CardHeader>
            <AnimatedCardContentWithCode
              className="space-y-3"
              cardId="experience-previous-role"
              lines={[
                <>
                  <span className="ml-2 text-accent">class</span>
                  <span className="text-primary"> PreviousRole</span>
                  <span className="text-foreground">:</span>
                </>,
                <>
                  <span className="ml-6 text-primary">company</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-green-400">"eSentire Inc"</span>
                </>,
                <>
                  <span className="ml-6 text-primary">position</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-green-400">
                    "Lead Software Developer"
                  </span>
                </>,
                <>
                  <span className="ml-6 text-primary">duration</span>
                  <span className="text-foreground"> = </span>
                  <span className="text-green-400">"2016 - 2023"</span>
                </>,
                <>
                  <span className="ml-6 text-primary">previous_positions</span>
                  <span className="text-foreground"> = [</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Senior Software Developer"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Software Developer"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Software Developer Coop"
                  </span>
                </>,
                <>
                  <span className="ml-6 text-foreground">]</span>
                </>,
                <>
                  <span className="ml-6 text-primary">achievements</span>
                  <span className="text-foreground"> = [</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "XDR Platform Development"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Founded the Architecture Review Board"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "On-prem to AWS Migration"
                  </span>
                </>,
                <>
                  <span className="ml-6 text-foreground">]</span>
                </>,
              ]}
            />
          </Card>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="space-y-6">
        <h2 className="text-xl font-mono font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Education &
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  education.json
                </span>
              </div>
            </CardHeader>
            <AnimatedCardContentWithCode
              className="space-y-3"
              cardId="experience-education"
              lines={[
                <>
                  <span className="ml-2 text-foreground">{'{'}</span>
                </>,
                <>
                  <span className="ml-6 text-primary">"bachelor"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-green-400">
                    "Computer Science, Honours"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-6 text-primary">"university"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-green-400">
                    "University of Waterloo"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-6 text-primary">"graduation"</span>
                  <span className="text-foreground">: </span>
                  <span className="text-red-400">2018</span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-6 text-primary">"focus_areas"</span>
                  <span className="text-foreground">: [</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Quality Assurance"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Artificial Intelligence"
                  </span>
                  <span className="text-foreground">,</span>
                </>,
                <>
                  <span className="ml-10 text-green-400">
                    "Database Design"
                  </span>
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

          {/* Certifications */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  certifications.ts
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 font-mono text-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border border-border/50 rounded bg-background/50">
                  <span className="text-primary">AWS Solutions Architect</span>
                  <span className="text-xs text-muted-foreground">Planned</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-border/50 rounded bg-background/50">
                  <span className="text-primary">Python Professional</span>
                  <span className="text-xs text-muted-foreground">Planned</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-border/50 rounded bg-background/50">
                  <span className="text-primary">Terraform Associate</span>
                  <span className="text-xs text-muted-foreground">Planned</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Projects */}
      <div className="space-y-6">
        <h2 className="text-xl font-mono font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Notable Projects
        </h2>

        <div className="grid gap-6">
          {/* Project 1 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">
                    social-media-platform.md
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="font-mono text-xs">
                  <span className="text-primary">$</span> view details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-mono text-lg text-primary mb-2">
                  # Big Data Social Media Analytics Platform
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Architected and developed a scalable social media listening
                  platform processing millions of posts daily. Built with AWS
                  services, Python, and real-time analytics capabilities.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  AWS
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Machine Learning
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Python
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Big Data
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Real-time Analytics
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">
                    xdr-platform.md
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="font-mono text-xs">
                  <span className="text-primary">$</span> view details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-mono text-lg text-primary mb-2">
                  # Extended Detection & Response (XDR) Platform
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Led development of cybersecurity platform handling massive
                  data volumes for threat detection and response. Implemented
                  machine learning algorithms and real-time data processing
                  pipelines.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Cybersecurity
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Machine Learning
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Data Pipelines
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Team Leadership
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">
                    portfolio.md
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="font-mono text-xs"
                >
                  <a
                    href="https://github.com/JDup3/jdup3.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-primary">$</span> git clone
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-mono text-lg text-primary mb-2">
                  # VS Code Themed Portfolio Website
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Modern portfolio website built with React, TypeScript, and
                  Tailwind CSS. Features VS Code-inspired design with reusable
                  components and responsive layout.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  React
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  Responsive Design
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skills Summary */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-xs font-mono text-muted-foreground ml-2">
              skills_summary.md
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 font-mono text-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="text-primary mb-2"># Backend & Cloud</h4>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>- Python</li>
                <li>- AWS (Lambda, Sagemaker, DynamoDB, etc.)</li>
                <li>- Docker & Containerization</li>
                <li>- Terraform Infrastructure</li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary mb-2"># Frontend & Mobile</h4>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>- React & TypeScript</li>
                <li>- Modern CSS (Tailwind)</li>
                <li>- Responsive Design</li>
                <li>- Progressive Web Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary mb-2"># Data & Analytics</h4>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>- Big Data Processing</li>
                <li>- Real-time Analytics</li>
                <li>- Machine Learning Pipelines</li>
                <li>- Data Visualization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Experience;
