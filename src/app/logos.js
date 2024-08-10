import Image from 'next/image';

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
  { src: '/PostgreSQL-logo.png', alt: 'PostgreSQL Logo', title: 'PostgreSQL', name: 'PostgreSQL' },
  { src: '/firebase-logo.png', alt: 'Firebase Logo', title: 'Firebase', name: 'Firebase' },
  { src: '/docker-logo.png', alt: 'Docker Logo', title: 'Docker', name: 'Docker' },
  { src: '/fastapi-logo.png', alt: 'FastAPI Logo', title: 'FastAPI', name: 'FastAPI' },
  { src: '/Tableau-logo.jpeg', alt: 'Tableau Logo', title: 'Tableau', name: 'Tableau' },
  { src: '/grafana-logo.png', alt: 'Grafana Logo', title: 'Grafana', name: 'Grafana' },
  { src: '/prometheus-logo.png', alt: 'Prometheus Logo', title: 'Prometheus', name: 'Prometheus' },
];

const Logos = () => {
  return (
    <div className="skills-grid">
      {logos.map((logo, index) => (
        <div className="skill-item" key={index}>
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
  );
};

export default Logos;