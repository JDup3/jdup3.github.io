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
        <div className="flex items-center space-x-2 font-mono text-sm text-muted-foreground">
          <span className="text-primary">import</span>
          <span className="text-foreground">{'{'}</span>
          <span className="text-accent">experience</span>
          <span className="text-foreground">{'}'}</span>
          <span className="text-primary">from</span>
          <span className="text-green-400">'./career-journey'</span>
        </div>
        <h1 className="font-mono text-3xl font-bold text-foreground">
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
        <h2 className="font-mono text-xl font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Work Experience
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Position */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
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
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
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

      {/* Services and Frameworks */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Top Services &
          Frameworks
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  services.js
                </span>
              </div>
            </CardHeader>
            <AnimatedCardContentWithCode
              className="space-y-3"
              cardId="experience-services"
              lines={[
                <>
                  <span className="ml-2 text-accent">let</span>
                  <span className="text-primary"> topServices </span>
                  <span className="text-foreground">= {'{'}</span>
                </>,
                <>
                  <span className="ml-6 text-primary">AWS</span>
                  <span className="text-foreground">: {'{'}</span>
                </>,
                <>
                  <span className="ml-10 text-primary">compute</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"Lambda"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"Step Functions"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">api</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"API Gateway"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"Cognito"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">ml</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"SageMaker"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">messaging</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"SQS"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"Kinesis"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"EventBridge"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">data</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"DynamoDB"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"S3"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"RDS"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"Glue"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-6 text-foreground">{'}'}</span>
                </>,
                <>
                  <span className="ml-6 text-primary">GCP</span>
                  <span className="text-foreground">: {'{'}</span>
                </>,
                <>
                  <span className="ml-10 text-primary">ml</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"Vertex AI"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">compute</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"App Engine"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">data</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"Cloud SQL"</span>
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
          {/* Frameworks */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  frameworks.js
                </span>
              </div>
            </CardHeader>
            <AnimatedCardContentWithCode
              className="space-y-3"
              cardId="experience-frameworks"
              lines={[
                <>
                  <span className="ml-2 text-accent">let</span>
                  <span className="text-primary"> topFrameworks </span>
                  <span className="text-foreground">= {'{'}</span>
                </>,
                <>
                  <span className="ml-6 text-primary">python</span>
                  <span className="text-foreground">: {'{'}</span>
                </>,
                <>
                  <span className="ml-10 text-primary">ml</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"transformers"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">bigData</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"pyspark"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"pandas"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">cloud</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"boto3"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-6 text-foreground">{'}'}</span>
                </>,
                <>
                  <span className="ml-6 text-primary">webFrameworks</span>
                  <span className="text-foreground">: {'{'}</span>
                </>,
                <>
                  <span className="ml-10 text-primary">backend</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"django"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"flask"</span>
                  <span className="text-foreground">]</span>
                </>,
                <>
                  <span className="ml-10 text-primary">frontend</span>
                  <span className="text-foreground">: [</span>
                  <span className="text-green-400">"React"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"Vue.js"</span>
                  <span className="text-foreground">, </span>
                  <span className="text-green-400">"Vite"</span>
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
      </div>

      {/* Education and Certifications */}
      <div className="space-y-6">
        <h2 className="font-mono text-xl font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Education &
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Education */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
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
                <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  certifications.txt
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 font-mono text-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded border border-border/50 bg-background/50 p-3">
                  <span className="text-primary">AWS Solutions Architect</span>
                  <span className="text-xs text-muted-foreground">Planned</span>
                </div>
                <div className="flex items-center justify-between rounded border border-border/50 bg-background/50 p-3">
                  <span className="text-primary">Python Professional</span>
                  <span className="text-xs text-muted-foreground">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center justify-between rounded border border-border/50 bg-background/50 p-3">
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
        <h2 className="font-mono text-xl font-semibold text-primary">
          <span className="text-muted-foreground">//</span> Notable Projects
        </h2>

        <div className="grid gap-6">
          {/* Project 1 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    social-media-platform.md
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="font-mono text-xs">
                  <a
                    href="https://www.pendulumintel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-primary">$</span> curl
                    pendulumintel.com
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-mono text-lg text-primary">
                  # Big Data Social Media Analytics Platform
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Architected and developed a scalable social media listening
                  platform processing millions of posts daily for near realtime
                  brand analytics and alerts. Built with AWS services, Python,
                  Machine Learning, and AI.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  AWS
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  Machine Learning
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  Python
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  Big Data
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
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
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    xdr-platform.md
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="font-mono text-xs">
                  <a
                    href="https://www.esentire.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-primary">$</span> curl esentire.com
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-mono text-lg text-primary">
                  # Extended Detection & Response (XDR) Platform
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Architected and developed major components for a cybersecurity
                  platform for threat detection and response. Implemented
                  real-time data processing pipelines, Restful APIs, UIs, and
                  data pulling systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  Cybersecurity
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  AWS
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  UI Development
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  Data Pipelines
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
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
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
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
                    <span className="text-primary">$ </span> git clone
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-mono text-lg text-primary">
                  # Code Themed Portfolio Website
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Modern portfolio website built with React, TypeScript, and
                  Tailwind CSS. Features code-themed design with reusable
                  components and responsive layout.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  React
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  TypeScript
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  Tailwind CSS
                </span>
                <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
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
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              skills_summary.md
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 font-mono text-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-primary"># Backend & Cloud</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>- AWS & GCP</li>
                <li>- Docker & Containerization</li>
                <li>- Terraform Infrastructure</li>
                <li>- SDLC Best Practices</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-primary"># Frontend & Mobile</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>- Javascript & TypeScript</li>
                <li>- React & Vue</li>
                <li>- Modern CSS (Tailwind)</li>
                <li>- Responsive Design</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-primary"># Data & Analytics</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
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
