export type Lang = 'en' | 'de';

export type LocalizedString = Record<Lang, string>;

export type Labels = {
  about: string;
  experience: string;
  papers: string;
  awards: string;
  projects: string;
  writing: string;
  contact: string;
  name: string;
  role: string;
  interests: string;
  status: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  scholar: string;
  thanks: string;
  echoCmd: string;
  colorHint: string;
};

export type I18nBlock = {
  role: string;
  interests: string;
  status: string;
  about: string[];
  labels: Labels;
};

export type Project = {
  title: string;
  year: string;
  desc: LocalizedString;
  tech: string[];
  link: string;
};

export type Paper = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  link: string;
};

export type Writing = {
  title: string;
  date: string;
  read: string;
  link: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  desc: LocalizedString;
};

export type Award = {
  title: string;
  org: string;
  year: string;
  desc: string;
};

export type Site = {
  name: string;
  shortName: string;
  location: LocalizedString;
  email: string;
  github: string;
  linkedin: string;
  scholar: string;
  i18n: Record<Lang, I18nBlock>;
  projects: Project[];
  papers: Paper[];
  writing: Writing[];
  experience: Experience[];
  awards: Award[];
};

export const SITE: Site = {
  name: 'R. Kaan Karaman',
  shortName: 'Kaan',
  location: {
    en: 'Munich, Germany',
    de: 'München, Deutschland'
  },
  email: 'kaanrkaraman@gmail.com',
  github: 'github.com/kaanrkaraman',
  linkedin: 'linkedin.com/in/kaanrkaraman',
  scholar: 'scholar.google.com/citations?user=KxUOqCMAAAAJ',

  i18n: {
    en: {
      role: 'Computer Engineering student, 3rd year',
      interests: 'machine learning, applied research',
      status: "open to fall '26 roles",
      about: [
        "I'm in my third year of Computer Engineering, working mostly on machine learning and applied research.",
        "My time goes to research, a part-time industry job, and writing about whatever I'm trying to figure out."
      ],
      labels: {
        about: 'about', experience: 'experience', papers: 'papers',
        awards: 'awards', projects: 'projects', writing: 'writing', contact: 'contact',
        name: 'name', role: 'role', interests: 'interests', status: 'status', location: 'location',
        email: 'email', github: 'github', linkedin: 'linkedin', scholar: 'scholar',
        thanks: 'thanks for stopping by.',
        echoCmd: 'echo "thanks for stopping by."',
        colorHint: '# click a color to apply'
      }
    },
    de: {
      role: 'Informatikstudent (Computer Engineering), 3. Jahr',
      interests: 'maschinelles Lernen, angewandte Forschung',
      status: "offen für Herbst '26",
      about: [
        'Ich studiere Informatik im dritten Jahr und arbeite meistens an maschinellem Lernen und angewandter Forschung.',
        'Meine Zeit geht in Forschung, einen Teilzeitjob in der Industrie und ins Schreiben über Dinge, die mich gerade beschäftigen.'
      ],
      labels: {
        about: 'über', experience: 'erfahrung', papers: 'publikationen',
        awards: 'auszeichnungen', projects: 'projekte', writing: 'texte', contact: 'kontakt',
        name: 'name', role: 'rolle', interests: 'interessen', status: 'status', location: 'ort',
        email: 'email', github: 'github', linkedin: 'linkedin', scholar: 'scholar',
        thanks: 'danke fürs vorbeischauen.',
        echoCmd: 'echo "danke fürs vorbeischauen."',
        colorHint: '# klicke eine farbe zum anwenden'
      }
    }
  },

  projects: [
    {
      title: 'pydocs-rag',
      year: '2025',
      desc: {
        en: 'Failure-aware RAG over the Python docs, with a proper eval harness.',
        de: 'Failure-aware RAG über die Python-Doku, mit einem richtigen Eval-Setup.'
      },
      tech: ['Python', 'FAISS', 'FastAPI', 'Docker'],
      link: 'https://github.com/kaanrkaraman/pydocs-rag'
    },
    {
      title: 'cortex',
      year: '2024',
      desc: {
        en: 'A small CNN framework in pure NumPy, tested against PyTorch.',
        de: 'Ein kleines CNN-Framework in reinem NumPy, gegen PyTorch getestet.'
      },
      tech: ['Python', 'NumPy'],
      link: 'https://github.com/kaanrkaraman/cortex'
    }
  ],

  papers: [
    {
      title: 'From BM25 to Corrective RAG: Benchmarking Retrieval Strategies for Text-and-Table Documents',
      venue: 'arXiv',
      year: '2026',
      authors: 'Karaman, R. K., et al. · co-author',
      link: 'https://arxiv.org/abs/2604.01733'
    },
    {
      title: 'Code2Doc: A Quality-First Curated Dataset for Code Documentation',
      venue: 'arXiv',
      year: '2025',
      authors: 'Karaman, R. K., et al. · first author',
      link: 'https://arxiv.org/abs/2512.18748'
    },
    {
      title: 'RAG-Driven Data Quality Governance for Enterprise ERP Systems',
      venue: 'arXiv',
      year: '2025',
      authors: 'Karaman, R. K., et al. · co-author',
      link: 'https://arxiv.org/abs/2511.16700'
    }
  ],

  writing: [
    {
      title: 'Engineering is dead, long live engineering.',
      date: 'Oct 2025',
      read: '36 min',
      link: 'https://medium.com/@rkaankaraman/engineering-is-dead-long-live-engineering-996603f2b7b6'
    },
    {
      title: 'Understanding Latent Space',
      date: 'Oct 2025',
      read: '7 min',
      link: 'https://medium.com/@rkaankaraman/understanding-latent-space-how-meaning-is-represented-by-ai-b982dab1bee4'
    }
  ],

  experience: [
    {
      role: 'Research Intern',
      org: 'Technical University of Munich (TUM)',
      period: 'Summer 2026',
      desc: {
        en: 'Visiting research intern, working on a project at the chair.',
        de: 'Gastforschungspraktikant, Mitarbeit an einem Projekt am Lehrstuhl.'
      }
    },
    {
      role: 'AI Researcher',
      org: 'TÜBİTAK',
      period: '2026',
      desc: {
        en: 'Applied machine learning research with senior researchers.',
        de: 'Angewandte Forschung zu maschinellem Lernen, zusammen mit erfahrenen Forschenden.'
      }
    },
    {
      role: 'AI Engineer, Working Student',
      org: 'Hagia Labs Pte. Ltd. (Singapore)',
      period: '2025 to 2026',
      desc: {
        en: 'Built and shipped features as a remote working student.',
        de: 'Features als Werkstudent remote entwickelt und ausgeliefert.'
      }
    }
  ],

  awards: [
    {
      title: 'Tinker AI Research Grant ($5,000)',
      org: 'Thinking Machines Lab',
      year: '2025',
      desc: 'Using LLMs to explain drone anomaly detection.'
    },
    {
      title: 'TÜBİTAK 2247-C STAR Researcher Fellowship',
      org: 'Scientific and Technological Research Council of Türkiye',
      year: '2025',
      desc: 'National research funding for generating synthetic histopathology images with machine learning.'
    }
  ]
};

export type Accent = {
  id: string;
  value: string;
  swatch: string;
};

export const ACCENTS: Accent[] = [
  { id: 'ansi',    value: '#5F87FF',              swatch: '#5F87FF' },
  { id: 'crimson', value: 'oklch(58% 0.19 25)',   swatch: 'oklch(58% 0.19 25)' },
  { id: 'amber',   value: 'oklch(72% 0.16 70)',   swatch: 'oklch(72% 0.16 70)' },
  { id: 'forest',  value: 'oklch(55% 0.13 150)',  swatch: 'oklch(55% 0.13 150)' },
  { id: 'plum',    value: 'oklch(52% 0.16 320)',  swatch: 'oklch(52% 0.16 320)' }
];

