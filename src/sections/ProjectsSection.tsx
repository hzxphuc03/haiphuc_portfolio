import { FadeIn } from '../components/FadeIn';

const WORK_EXPERIENCE = {
  company: "FSEL",
  role: "Front-End Developer Intern / Fresher",
  period: "2025 – Present",
  tasks: [
    "Contributed to enterprise and educational management systems using Angular, TypeScript, and RxJS within an Agile/Scrum environment.",
    "Collaborated in a cross-functional team of 13 members to deliver scalable production features.",
    "Designed and developed reusable component-based frontend architectures to improve maintainability.",
    "Integrated RESTful APIs and handled asynchronous data flows using RxJS operators (switchMap, debounceTime, distinctUntilChanged).",
    "Optimized search, filtering, and large-data loading performance to improve system responsiveness.",
    "Built recursive tree structures and hierarchical data systems for academic management modules.",
    "Developed dynamic Reactive Forms with custom validation and advanced form state handling."
  ],
  tags: ["Angular", "TypeScript", "RxJS", "Agile/Scrum", "GitLab", "Jira"]
};

const PERSONAL_PROJECTS = {
  name: "Hai Phuc Shop",
  role: "Fullstack Developer",
  period: "2025 – Present",
  tasks: [
    "Developed a fullstack clothing e-commerce platform using Next.js, React, Node.js, Express, and MongoDB.",
    "Implemented core features: Authentication, Product Management, Shopping Cart, and Admin Dashboard.",
    "Integrated comprehensive SEO: Dynamic Metadata, Sitemap.xml, Robots.txt, and Open Graph tags.",
    "Optimized performance using lazy loading, image optimization, and caching to achieve top Lighthouse scores.",
    "Deployed and maintained the production system on Vercel and Render with environment monitoring."
  ],
  tags: ["Next.js", "React", "Node.js", "MongoDB", "SEO", "Vercel", "Render"]
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] px-6 md:px-10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <FadeIn y={30}>
          <h2 className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-20 leading-none tracking-tighter">
            Experience & Works
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-24 lg:gap-32">
          {/* Column 1: Work Experience */}
          <div className="flex flex-col gap-12">
            <FadeIn delay={0.2} y={30} className="flex flex-col gap-6">
              <div className="border-b border-[#D7E2EA]/10 pb-8">
                <span className="text-[#D7E2EA]/40 uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">Work Experience</span>
                <h3 className="text-[#D7E2EA] font-bold text-4xl sm:text-5xl md:text-6xl uppercase leading-none mb-4">
                  {WORK_EXPERIENCE.company}
                </h3>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <p className="text-[#D7E2EA]/80 font-medium uppercase text-sm sm:text-base tracking-widest">{WORK_EXPERIENCE.role}</p>
                  <p className="text-[#D7E2EA]/30 text-xs sm:text-sm uppercase font-light">{WORK_EXPERIENCE.period}</p>
                </div>
              </div>
              
              <ul className="flex flex-col gap-6">
                {WORK_EXPERIENCE.tasks.map((task, i) => (
                  <li key={i} className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed flex gap-4 group">
                    <span className="text-[#D7E2EA]/20 group-hover:text-[#D7E2EA]/50 transition-colors duration-300">—</span>
                    <span className="group-hover:text-[#D7E2EA] transition-colors duration-300">{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-4">
                {WORK_EXPERIENCE.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-[#D7E2EA]/10 text-[#D7E2EA]/40 text-[10px] uppercase tracking-widest font-medium hover:border-[#D7E2EA]/30 hover:text-[#D7E2EA]/80 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Column 2: Personal Projects */}
          <div className="flex flex-col gap-12">
            <FadeIn delay={0.4} y={30} className="flex flex-col gap-6">
              <div className="border-b border-[#D7E2EA]/10 pb-8">
                <span className="text-[#D7E2EA]/40 uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block">Personal Projects</span>
                <h3 className="text-[#D7E2EA] font-bold text-4xl sm:text-5xl md:text-6xl uppercase leading-none mb-4">
                  {PERSONAL_PROJECTS.name}
                </h3>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <p className="text-[#D7E2EA]/80 font-medium uppercase text-sm sm:text-base tracking-widest">{PERSONAL_PROJECTS.role}</p>
                  <p className="text-[#D7E2EA]/30 text-xs sm:text-sm uppercase font-light">{PERSONAL_PROJECTS.period}</p>
                </div>
              </div>
              
              <ul className="flex flex-col gap-6">
                {PERSONAL_PROJECTS.tasks.map((task, i) => (
                  <li key={i} className="text-[#D7E2EA]/60 text-sm sm:text-base leading-relaxed flex gap-4 group">
                    <span className="text-[#D7E2EA]/20 group-hover:text-[#D7E2EA]/50 transition-colors duration-300">—</span>
                    <span className="group-hover:text-[#D7E2EA] transition-colors duration-300">{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-4">
                {PERSONAL_PROJECTS.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full border border-[#D7E2EA]/10 text-[#D7E2EA]/40 text-[10px] uppercase tracking-widest font-medium hover:border-[#D7E2EA]/30 hover:text-[#D7E2EA]/80 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
