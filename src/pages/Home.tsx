import { version } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CodeFileCard } from '@/components/code/CodeFileCard';
import { CodeWindow } from '@/components/code/CodeWindow';
import { CommandLink } from '@/components/code/CommandLink';
import { MarkdownBullet } from '@/components/code/MarkdownBullet';
import { PageHeader } from '@/components/code/PageHeader';
import { aboutMe, currentProject, header, statusBar } from '@/content/home';

function Home() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        titleClassName="text-xl sm:text-2xl md:text-3xl"
      >
        <p className="max-w-6xl font-mono text-sm text-muted-foreground sm:text-base md:text-lg">
          {header.intro}
        </p>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <CodeFileCard card={aboutMe} typingSpeed={15} lineDelay={150} />

        <CodeWindow file={currentProject.file} dot="success">
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">#</span> {currentProject.heading}
              </p>
              <div className="ml-4 space-y-1">
                <p className="text-foreground">
                  <span className="text-primary">## **</span>
                  {currentProject.company}
                  <span className="text-primary">**</span> -{' '}
                  {currentProject.role}
                </p>
                {currentProject.bullets.map((bullet) => (
                  <MarkdownBullet
                    key={bullet}
                    className="text-foreground text-muted-foreground"
                  >
                    {bullet}
                  </MarkdownBullet>
                ))}
              </div>
            </div>
            <div className="pt-2">
              <CommandLink
                href={currentProject.link.href}
                command={currentProject.link.command}
                variant="outline"
              />
            </div>
          </CardContent>
        </CodeWindow>
      </div>

      {/* Status Bar */}
      <Card className="border-border/50 bg-card/50">
        <CardContent className="py-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-4 text-muted-foreground">
              {statusBar.left.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground">
              {statusBar.right.map((item) => (
                <span key={item}>{item}</span>
              ))}
              <span>React {version}</span>
              <span>TypeScript {__TYPESCRIPT_VERSION__}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
