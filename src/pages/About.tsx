import { CardContent } from '@/components/ui/card';
import { CodeFileCard } from '@/components/code/CodeFileCard';
import { CodeWindow } from '@/components/code/CodeWindow';
import { MarkdownBullet } from '@/components/code/MarkdownBullet';
import { PageHeader } from '@/components/code/PageHeader';
import { TerminalPrompt } from '@/components/code/TerminalPrompt';
import {
  backendSkills,
  header,
  infrastructure,
  interests,
  philosophy,
  whoami,
} from '@/content/about';

function About() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow={header.eyebrow} title={header.title} />

      <TerminalPrompt
        command={whoami.command}
        outputClassName="text-foreground"
      >
        {whoami.output}
      </TerminalPrompt>

      <div className="grid gap-6 md:grid-cols-2">
        <CodeWindow file={philosophy.file} dot="warning">
          <CardContent className="space-y-4 font-mono text-sm">
            <div className="space-y-2">
              <p className="font-bold text-syntax-keyword">
                {philosophy.heading}
              </p>
              <div className="ml-4 space-y-1">
                {philosophy.items.map((item) => (
                  <MarkdownBullet key={item} className="text-foreground">
                    {item}
                  </MarkdownBullet>
                ))}
              </div>
            </div>
          </CardContent>
        </CodeWindow>
        <CodeFileCard card={interests} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CodeFileCard card={backendSkills} />
        <CodeFileCard card={infrastructure} />
      </div>
    </div>
  );
}

export default About;
