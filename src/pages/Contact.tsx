import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CodeWindow } from '@/components/code/CodeWindow';
import { MarkdownBullet } from '@/components/code/MarkdownBullet';
import { PageHeader } from '@/components/code/PageHeader';
import { TerminalPrompt } from '@/components/code/TerminalPrompt';
import { header, links, readme, signOff } from '@/content/contact';

function Contact() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow={header.eyebrow} title={header.title} />

      <div className="grid gap-6 md:grid-cols-2">
        <CodeWindow file={links.file} dot="success">
          <CardContent className="space-y-4">
            <div className="space-y-3 font-mono text-sm">
              {links.items.map((link) => (
                <div
                  key={link.key}
                  className="flex items-center justify-between rounded border border-border/50 bg-background/50 p-3"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">{link.key}</span>
                    <span className="text-muted-foreground">:</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="font-mono text-xs"
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </CodeWindow>

        <CodeWindow file={readme.file} dot="success">
          <CardContent className="space-y-4 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-muted-foreground">{readme.heading}</p>
              <div className="text-foreground">
                <p className="mb-2">{readme.intro}</p>
                <div className="ml-4 space-y-1">
                  {readme.topics.map((topic) => (
                    <MarkdownBullet key={topic} className="text-foreground">
                      {topic}
                    </MarkdownBullet>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </CodeWindow>
      </div>

      <TerminalPrompt command={signOff.command} outputClassName="text-accent">
        {signOff.output}
      </TerminalPrompt>
    </div>
  );
}

export default Contact;
