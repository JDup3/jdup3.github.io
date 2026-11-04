import { CardContent } from '@/components/ui/card';
import { CodeFileCard } from '@/components/code/CodeFileCard';
import { CodeWindow } from '@/components/code/CodeWindow';
import { CommandLink } from '@/components/code/CommandLink';
import { PageHeader } from '@/components/code/PageHeader';
import { SectionHeading } from '@/components/code/SectionHeading';
import {
  certifications,
  education,
  header,
  projects,
  roles,
  sections,
  skillsSummary,
  stack,
} from '@/content/experience';

function Experience() {
  return (
    <div className="space-y-8">
      <PageHeader eyebrow={header.eyebrow} title={header.title} />

      <div className="space-y-6">
        <SectionHeading>{sections.work}</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((card) => (
            <CodeFileCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeading>{sections.stack}</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {stack.map((card) => (
            <CodeFileCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeading>{sections.education}</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          <CodeFileCard card={education} />

          <CodeWindow file={certifications.file} dot={certifications.dot}>
            <CardContent className="space-y-3 font-mono text-sm">
              <div className="space-y-2">
                {certifications.items.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between rounded border border-border/50 bg-background/50 p-3"
                  >
                    <span className="text-primary">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </CodeWindow>
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeading>{sections.projects}</SectionHeading>
        <div className="grid gap-6">
          {projects.map((project) => (
            <CodeWindow
              key={project.file}
              file={project.file}
              dot={project.dot}
              action={
                <CommandLink
                  href={project.link.href}
                  command={project.link.command}
                />
              }
            >
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-mono text-lg text-primary">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </CodeWindow>
          ))}
        </div>
      </div>

      <CodeWindow file={skillsSummary.file} dot={skillsSummary.dot}>
        <CardContent className="space-y-4 font-mono text-sm">
          <div className="grid gap-4 md:grid-cols-3">
            {skillsSummary.columns.map((column) => (
              <div key={column.heading}>
                <h4 className="mb-2 text-primary">{column.heading}</h4>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {column.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </CodeWindow>
    </div>
  );
}

export default Experience;
