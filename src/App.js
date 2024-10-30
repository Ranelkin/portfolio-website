import React from 'react';
import { Mail, Code, Database} from 'lucide-react';
import SkillsSection from './components/SkillsSection';
import CopyToClipboard from './components/CopyToClipboard';
import Project from './components/Project';
import { siGithub, siLinkedin} from 'simple-icons';
import Service from './components/Service';
import WorkExperience from './components/WorkExperience';
import DarkModeToggle from './components/DarkModeToggle';
import { Helmet } from 'react-helmet';
const App = () => {
  

  
  return (
    <>
    <Helmet>
        <title>Ranel Karimov - Informatikstudent</title>
        <meta name="description" content="Portfolio von Ranel Karimov - Webentwickler und ETL-Entwickler" />
    </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 scroll-smooth">
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Ranel Karimov</h1>
        <div className="hidden md:flex items-center gap-6">
          {['Projekte', 'Leistungen', 'Erfahrung', 'Kontakt'].map(item => (
            <a href={`#${item}`} className="relative hover:text-blue-600 dark:text-gray-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">{item}</a>
          ))}
          <DarkModeToggle /> 
        </div>
      </div>
    </nav>

      <main className="pt-16 dark:text-black-200">
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center dark:text-white">
            <h2 className="text-4xl font-bold mb-4">Informatikstudent</h2>
            <p className="text-gray-600 mb-6">an der Goethe Universität Frankfurt</p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/ranelkin" target="_blank" rel="noopener noreferrer">
              <svg 
                    role="img" 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 cursor-pointer hover:text-blue-600"
                    fill="currentColor"
                    >
                    <path d={siGithub.path} />
              </svg>
              </a>
              <a href="https://linkedin.com/in/ranel-karimov-37337624a" target="_blank" rel="noopener noreferrer">
              <svg 
                role="img" 
                viewBox="0 0 24 24" 
                className="w-6 h-6 cursor-pointer hover:text-blue-600"
                fill="currentColor"
                >
                <path d={siLinkedin.path} />
              </svg>
              </a>
              <a href="#kontakt">
              <Mail className="w-6 h-6 cursor-pointer hover:text-blue-600" />
              </a>
            </div>
          </div>
        </section>

        <section id="Projekte" className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Aktuelle Projekte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Project title="Lernplattform für Datenbanken" 
                description="Eine open-source interaktive Plattform zum Erlernen moderner Datenbankparadigmen. Entwickelt mit React und JavaScript." 
                technologies={["React", "JavaScript"]} 
                link="https://github.com/VaneMeyer/nosqlconcepts" />
              <Project title="Portfolio Website" 
                description="Persönliche Portfolio Website, open source." 
                technologies={["React", "JavaScript"]} 
                link="https://github.com/Ranelkin/portfolio-website" />
              <Project title="Machine Learning Algorithmen"
                description="Implementierungen von verschiedenen Machine Learning Algorithmen"
                technologies={["Python", "Numpy", "sklearn"]}
                link="https://github.com/Ranelkin/Machine-Learning-Algorithms" />
            </div>
          </div>
        </section>

        <section id="Leistungen" className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Meine Leistungen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Service title="Webentwicklung" description="Entwicklung moderner, responsiver Webseiten und Webanwendungen mit React und JavaScript" icon={<Code className="w-6 h-6 text-blue-600"/>}/>
              <Service title="Prozessautomatisierung" description="Entwicklung und Optimierung von Skripten und Software für Prozessautomatisierung" icon={<Database className="w-6 h-6 text-blue-600"/>}/>
            </div>
          </div>
        </section>

        <section id="Erfahrung" className="py-16 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 dark:text-white">Berufliche Erfahrung</h3>
            <div className="space-y-6">
              <WorkExperience 
              positionTitle="Web Entwickler" 
              duration="Okt 2024 - Heute" 
              description={"Entwicklung einer Online-Lernplattform für Studierende an der Goethe Universität"} />
              <WorkExperience 
              positionTitle="ETL-Entwickler Werkstudent" 
              duration="Mär 2024 - Sep 2024" 
              description="ING DiBa - Data and Reporting Solutions
              • Entwicklung von ETL-Jobs
              • SQL-Entwicklung und Performancetuning
              • Problemanalyse und Behandlung" />
              <WorkExperience 
              positionTitle="Tutor für Datenbankentwicklung" 
              duration="Mai 2024 - Jul 2024" 
              description={"Goethe Universität - Übungsleitung und Betreuung für Studierende im Modul 'Programmierung von Datenbanken'"} />
              <WorkExperience 
              positionTitle="ETL-Entwickler Praktikum" 
              duration="Aug 2023 - Dez 2023" 
              description="ING DiBa - Data and Reporting Solutions
              • ETL-Pipeline-Entwicklung und Prozessautomatisierung
              • Datenbankentwicklung und Performance-Optimierung
              • Entwicklung mit SQL und SAS
              • SCRUM / Agile Software Development in internationalem Umfeld
              • Planung und Umsetzung von Software-Projekten
              • Implementierung automatisierter Fehlerbenachrichtigung für ETL-Prozesse" />
            </div>
          </div>
        </section>

        <section id="Skills" className="py-16 bg-white dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 dark:text-white">Fertigkeiten & Kentnisse</h3>
            <div className="space-y-6">
              <div>
                <SkillsSection title="Programmiersprachen & Tools" skills={['Python', 'SQL', 'C++', 'JavaScript', 'Java', 'React']} />
                
              </div>
              <div>
                <SkillsSection title="Sprachen" skills ={['Russisch (C2)', 'Deutsch (C2)', 'Englisch (C1)']} />
              </div>
            </div>
          </div>
        </section>

        <section id="Kontakt" className="py-16 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 text-center dark:text-white">
            <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
            <div className="flex items-center justify-center gap-2">
              <CopyToClipboard text="ranelkin@icloud.com" title="Email kopieren"/>
            </div>
            <p className="text-gray-600 mt-4">Ich freue mich auf Ihre Anfrage!</p>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default App;