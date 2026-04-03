import Image from 'next/image';
import "animate.css";
import { useScrollAnimation } from './useScrollAnimation';

const logos = [
  { src: '/python-logo.png', alt: 'Python Logo', title: 'Python', name: 'Python' },
  { src: '/java-logo.png', alt: 'Java Logo', title: 'Java', name: 'Java' },
  { src: '/javascript-logo.png', alt: 'JavaScript Logo', title: 'JavaScript', name: 'JavaScript' },
  { src: '/typescript-logo.png', alt: 'TypeScript Logo', title: 'TypeScript', name: 'TypeScript' },
  { src: '/react-logo.png', alt: 'React Logo', title: 'React', name: 'React' },
  { src: '/nodejs-logo.png', alt: 'Node.js Logo', title: 'Node.js', name: 'Node.js' },
  { src: '/html-logo.jpeg', alt: 'HTML5 Logo', title: 'HTML5', name: 'HTML5' },
  { src: '/css-logo.png', alt: 'CSS Logo', title: 'CSS', name: 'CSS' },
  { src: '/php-logo.png', alt: 'PHP Logo', title: 'PHP', name: 'PHP' },
  { src: '/sql-logo.png', alt: 'SQL Logo', title: 'SQL', name: 'SQL' },
  { src: '/mysql-logo.png', alt: 'MySQL Logo', title: 'MySQL', name: 'MySQL' },
  { src: '/postgresql-logo.png', alt: 'PostgreSQL Logo', title: 'PostgreSQL', name: 'PostgreSQL' },
  { src: '/firebase-logo.png', alt: 'Firebase Logo', title: 'Firebase', name: 'Firebase' },
  { src: '/docker-logo.png', alt: 'Docker Logo', title: 'Docker', name: 'Docker' },
  { src: '/fastapi-logo.png', alt: 'FastAPI Logo', title: 'FastAPI', name: 'FastAPI' },
  { src: '/tableau-logo.png', alt: 'Tableau Logo', title: 'Tableau', name: 'Tableau' },
  { src: '/grafana-logo.png', alt: 'Grafana Logo', title: 'Grafana', name: 'Grafana' },
  { src: '/prometheus-logo.png', alt: 'Prometheus Logo', title: 'Prometheus', name: 'Prometheus' },
];

const ADDITIONAL_SKILLS = {
  "AI & ML": ["LangChain", "OpenAI API", "RAG Pipelines", "Pinecone", "Scikit-learn", "Pandas", "NumPy"],
  "Additional Web & Full Stack": ["Remix", "Django", "Flask", "MongoDB", "Redis"],
  "Additional Tools & Cloud": ["AWS", "GCP", "GitHub Actions", "Git", "Linux", "Jest", "Playwright"],
};

const Logos = () => {
  useScrollAnimation();

  return (
    <div>
      {/* Icon Grid */}
      <div className="skills-grid">
        {logos.map((logo, index) => (
          <div className="skill-item opacity-0" key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              width={100}
              height={100}
            />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="border-t border-gray-200/30 dark:border-gray-700/30 my-10 mx-auto max-w-3xl" />

      {/* Additional Skills Pills */}
      <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto text-left px-4">
        {Object.entries(ADDITIONAL_SKILLS).map(([category, skills]) => (
          <div key={category} className="skill-item opacity-0">
            <h3 className="text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-300/40 dark:border-gray-600/40 px-3 py-1.5 text-sm transition-colors duration-200 hover:border-gray-400/70 dark:hover:border-gray-400/70 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
