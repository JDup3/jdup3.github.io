import { CardContent } from '@/components/ui/card';
import { CodeFileCard } from '@/components/code/CodeFileCard';
import { CodeWindow } from '@/components/code/CodeWindow';
import { CommandLink } from '@/components/code/CommandLink';
import { MarkdownBullet } from '@/components/code/MarkdownBullet';
import { PageHeader } from '@/components/code/PageHeader';
import { aboutMe, currentProject, header } from '@/content/home';

function Home() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow={header.eyebrow} title={header.title}>
        <p className="max-w-3xl font-mono text-sm text-pretty text-syntax-string sm:text-base">
          {header.intro}
        </p>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <CodeFileCard card={aboutMe} typingSpeed={15} lineDelay={150} />

        <CodeWindow file={currentProject.file} dot="success">
          <CardContent className="space-y-3 font-mono text-sm">
            <div className="space-y-2">
              <p className="font-bold text-syntax-keyword">
                <span>#</span> {currentProject.heading}
              </p>
              <div className="ml-4 space-y-1">
                <p className="text-foreground">
                  <span className="text-syntax-keyword">## **</span>
                  {currentProject.company}
                  <span className="text-syntax-keyword">**</span> -{' '}
                  {currentProject.role}
                </p>
                {currentProject.bullets.map((bullet) => (
                  <MarkdownBullet key={bullet} className="text-foreground">
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
    </div>
  );
}

export default Home;
