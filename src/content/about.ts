import type { CodeCard } from './types';
import { kw, line, nm, p, str, txt } from './tokens';

export const header = {
  eyebrow: [nm('/**'), txt('About me'), nm('*/')],
  title: [
    kw('class'),
    p(' '),
    nm('JonathanDupe'),
    p(' extends '),
    nm('SoftwareArchitect'),
  ],
};

export const whoami = {
  command: 'whoami',
  output:
    'Computer Scientist & Software Developer/Architect with expertise in building scalable platforms and data pipelines using AWS and Python while promoting a culture of learning, growth, and innovation.',
};

export const philosophy = {
  file: 'philosophy.md',
  heading: '# Professional Philosophy',
  items: [
    'Be committed to continuous learning and growth',
    'Pay it forward through mentorship and knowledge sharing',
    'Quality over quantity, correctness over speed',
    'Systems are as scalable and maintainable as the people who build them',
    'Code can tell a story; write it well',
  ],
};

export const interests: CodeCard = {
  id: 'about-interests',
  file: 'interests.js',
  dot: 'warning',
  lines: [
    line(0, kw('const'), nm(' interests '), p('= [')),
    line(1, str("'Software development'"), p(',')),
    line(1, str("'System architecture'"), p(',')),
    line(1, str("'Video game development'"), p(',')),
    line(1, str("'Tabletop gaming'"), p(',')),
    line(1, str("'3D Printing'"), p(',')),
    line(1, str("'PC Building'")),
    line(0, p(']')),
  ],
};

export const backendSkills: CodeCard = {
  id: 'about-backend-skills',
  file: 'backend.json',
  dot: 'success',
  lines: [
    line(0, p('{')),
    line(1, nm('"languages"'), p(': [')),
    line(2, str('"Python"'), p(',')),
    line(2, str('"TypeScript"'), p(',')),
    line(2, str('"JavaScript"')),
    line(1, p('],')),
    line(
      1,
      nm('"tools"'),
      p(': ['),
      str('"Docker"'),
      p(', '),
      str('"Make"'),
      p(', '),
      str('"Git"'),
      p('],')
    ),
    line(1, nm('"soft_skills"'), p(': [')),
    line(2, str('"Mentorship"'), p(',')),
    line(2, str('"Leadership"'), p(',')),
    line(2, str('"Documentation"')),
    line(1, p('],')),
    line(1, nm('"code_agents"'), p(': ['), str('"Github Copilot"'), p('],')),
    line(0, p('}')),
  ],
};

export const infrastructure: CodeCard = {
  id: 'about-infrastructure',
  file: 'infrastructure.tfvars',
  dot: 'success',
  lines: [
    line(0, nm('infrastructure_stack'), p(' = {')),
    line(
      1,
      nm('cloud_providers'),
      p(' = ['),
      str('"AWS"'),
      p(', '),
      str('"GCP"'),
      p(']')
    ),
    line(1, nm('iac_tools'), p(' = ['), str('"Terraform"'), p(']')),
    line(1, nm('deployment'), p(' = [')),
    line(2, str('"Github Actions"'), p(',')),
    line(2, str('"Jenkins"'), p(',')),
    line(1, p(']')),
    line(1, nm('qa_tools'), p(' = ['), str('"pytest"'), p(']')),
    line(1, nm('monitoring'), p(' = [')),
    line(2, str('"grafana"'), p(',')),
    line(2, str('"prometheus"'), p(',')),
    line(2, str('"cloudwatch"'), p(',')),
    line(1, p(']')),
    line(0, p('}')),
  ],
};
