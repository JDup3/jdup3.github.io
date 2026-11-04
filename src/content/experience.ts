import type { CodeCard, Project, WindowDot } from './types';
import { kw, line, nm, num, p, str } from './tokens';

export const header = {
  eyebrow: [
    nm('import'),
    p('{'),
    kw('experience'),
    p('}'),
    nm('from'),
    str("'./career-journey'"),
  ],
  title: [
    kw('const'),
    p(' '),
    nm('professionalJourney'),
    p(' = '),
    kw('await'),
    p(' getExperience()'),
  ],
};

export const sections = {
  work: 'Work Experience',
  stack: 'Top Services & Frameworks',
  education: 'Education & Certifications',
  projects: 'Notable Projects',
};

export const roles: CodeCard[] = [
  {
    id: 'experience-current-role',
    file: 'current_role.py',
    dot: 'success',
    lines: [
      line(0, kw('class'), nm(' CurrentRole'), p(':')),
      line(1, nm('company'), p(' = '), str('"Pendulum Intel"')),
      line(1, nm('position'), p(' = '), str('"Lead Software Developer"')),
      line(1, nm('duration'), p(' = '), str('"2023 - Present"')),
      line(1, nm('focus'), p(' = [')),
      line(2, str('"Big Data Platforms"'), p(',')),
      line(2, str('"Leadership and Mentorship"'), p(',')),
      line(2, str('"System Design and Architecture"')),
      line(1, p(']')),
      line(1, nm('achievements'), p(' = [')),
      line(2, str('"Realtime ML Enrichment Pipeline"'), p(',')),
      line(2, str('"Realtime Smart Social Alerting System"'), p(',')),
      line(2, str('"Company Munch and Learns"')),
      line(1, p(']')),
    ],
  },
  {
    id: 'experience-previous-role',
    file: 'previous_role.py',
    dot: 'yellow',
    lines: [
      line(0, kw('class'), nm(' PreviousRole'), p(':')),
      line(1, nm('company'), p(' = '), str('"eSentire Inc"')),
      line(1, nm('position'), p(' = '), str('"Lead Software Developer"')),
      line(1, nm('duration'), p(' = '), str('"2016 - 2023"')),
      line(1, nm('previous_positions'), p(' = [')),
      line(2, str('"Senior Software Developer"'), p(',')),
      line(2, str('"Software Developer"'), p(',')),
      line(2, str('"Software Developer Coop"')),
      line(1, p(']')),
      line(1, nm('achievements'), p(' = [')),
      line(2, str('"XDR Platform Development"'), p(',')),
      line(2, str('"Founded the Architecture Review Board"'), p(',')),
      line(2, str('"On-prem to AWS Migration"')),
      line(1, p(']')),
    ],
  },
];

export const stack: CodeCard[] = [
  {
    id: 'experience-services',
    file: 'services.js',
    dot: 'purple',
    lines: [
      line(0, kw('let'), nm(' topServices '), p('= {')),
      line(1, nm('AWS'), p(': {')),
      line(
        2,
        nm('compute'),
        p(': ['),
        str('"Lambda"'),
        p(', '),
        str('"Step Functions"'),
        p(']')
      ),
      line(
        2,
        nm('api'),
        p(': ['),
        str('"API Gateway"'),
        p(', '),
        str('"Cognito"'),
        p(']')
      ),
      line(2, nm('ml'), p(': ['), str('"SageMaker"'), p(']')),
      line(
        2,
        nm('messaging'),
        p(': ['),
        str('"SQS"'),
        p(', '),
        str('"Kinesis"'),
        p(', '),
        str('"EventBridge"'),
        p(']')
      ),
      line(
        2,
        nm('data'),
        p(': ['),
        str('"DynamoDB"'),
        p(', '),
        str('"S3"'),
        p(', '),
        str('"RDS"'),
        p(', '),
        str('"Glue"'),
        p(']')
      ),
      line(1, p('}')),
      line(1, nm('GCP'), p(': {')),
      line(2, nm('ml'), p(': ['), str('"Vertex AI"'), p(']')),
      line(2, nm('compute'), p(': ['), str('"App Engine"'), p(']')),
      line(2, nm('data'), p(': ['), str('"Cloud SQL"'), p(']')),
      line(1, p('}')),
      line(0, p('}')),
    ],
  },
  {
    id: 'experience-frameworks',
    file: 'frameworks.js',
    dot: 'purple',
    lines: [
      line(0, kw('let'), nm(' topFrameworks '), p('= {')),
      line(1, nm('python'), p(': {')),
      line(2, nm('ml'), p(': ['), str('"transformers"'), p(']')),
      line(
        2,
        nm('bigData'),
        p(': ['),
        str('"pyspark"'),
        p(', '),
        str('"pandas"'),
        p(']')
      ),
      line(2, nm('cloud'), p(': ['), str('"boto3"'), p(']')),
      line(1, p('}')),
      line(1, nm('webFrameworks'), p(': {')),
      line(
        2,
        nm('backend'),
        p(': ['),
        str('"django"'),
        p(', '),
        str('"flask"'),
        p(']')
      ),
      line(
        2,
        nm('frontend'),
        p(': ['),
        str('"React"'),
        p(', '),
        str('"Vue.js"'),
        p(', '),
        str('"Vite"'),
        p(']')
      ),
      line(1, p('}')),
      line(0, p('}')),
    ],
  },
];

export const education: CodeCard = {
  id: 'experience-education',
  file: 'education.json',
  dot: 'blue',
  lines: [
    line(0, p('{')),
    line(
      1,
      nm('"bachelor"'),
      p(': '),
      str('"Computer Science, Honours"'),
      p(',')
    ),
    line(
      1,
      nm('"university"'),
      p(': '),
      str('"University of Waterloo"'),
      p(',')
    ),
    line(1, nm('"graduation"'), p(': '), num('2018'), p(',')),
    line(1, nm('"focus_areas"'), p(': [')),
    line(2, str('"Quality Assurance"'), p(',')),
    line(2, str('"Artificial Intelligence"'), p(',')),
    line(2, str('"Database Design"')),
    line(1, p(']')),
    line(0, p('}')),
  ],
};

export const certifications: {
  file: string;
  dot: WindowDot;
  items: readonly { name: string; status: string }[];
} = {
  file: 'certifications.txt',
  dot: 'purple',
  items: [
    { name: 'AWS Solutions Architect', status: 'Planned' },
    { name: 'Python Professional', status: 'In Progress' },
    { name: 'Terraform Associate', status: 'Planned' },
  ],
};

export const projects: Project[] = [
  {
    file: 'social-media-platform.md',
    dot: 'success',
    link: {
      href: 'https://www.pendulumintel.com/',
      command: 'curl pendulumintel.com',
    },
    title: '# Big Data Social Media Analytics Platform',
    description:
      'Architected and developed a scalable social media listening platform processing millions of posts daily for near realtime brand analytics and alerts. Built with AWS services, Python, Machine Learning, and AI.',
    tags: [
      'AWS',
      'Machine Learning',
      'Python',
      'Big Data',
      'Real-time Analytics',
    ],
  },
  {
    file: 'xdr-platform.md',
    dot: 'yellow',
    link: { href: 'https://www.esentire.com/', command: 'curl esentire.com' },
    title: '# Extended Detection & Response (XDR) Platform',
    description:
      'Architected and developed major components for a cybersecurity platform for threat detection and response. Implemented real-time data processing pipelines, Restful APIs, UIs, and data pulling systems.',
    tags: [
      'Cybersecurity',
      'AWS',
      'UI Development',
      'Data Pipelines',
      'Team Leadership',
    ],
  },
  {
    file: 'portfolio.md',
    dot: 'blue',
    link: {
      href: 'https://github.com/JDup3/jdup3.github.io',
      command: 'git clone',
    },
    title: '# Code Themed Portfolio Website',
    description:
      'Modern portfolio website built with React, TypeScript, and Tailwind CSS. Features code-themed design with reusable components and responsive layout.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
];

export const skillsSummary: {
  file: string;
  dot: WindowDot;
  columns: readonly { heading: string; items: readonly string[] }[];
} = {
  file: 'skills_summary.md',
  dot: 'success',
  columns: [
    {
      heading: '# Backend & Cloud',
      items: [
        'AWS & GCP',
        'Docker & Containerization',
        'Terraform Infrastructure',
        'SDLC Best Practices',
      ],
    },
    {
      heading: '# Frontend & Mobile',
      items: [
        'Javascript & TypeScript',
        'React & Vue',
        'Modern CSS (Tailwind)',
        'Responsive Design',
      ],
    },
    {
      heading: '# Data & Analytics',
      items: [
        'Big Data Processing',
        'Real-time Analytics',
        'Machine Learning Pipelines',
        'Data Visualization',
      ],
    },
  ],
};
