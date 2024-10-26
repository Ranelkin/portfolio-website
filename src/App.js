import React from 'react';
import { Mail, Code, Database} from 'lucide-react';
import SkillsSection from './components/SkillsSection';
import CopyToClipboard from './components/CopyToClipboard';
import Project from './components/Project';
import { siGithub, siLinkedin} from 'simple-icons';
const App = () => {
  

  
  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <nav className="fixed w-full bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Ranel Karimov</h1>
          <div className="flex gap-6">
            <a href="#projekte" className="hover:text-blue-600">Projekte</a>
            <a href="#leistungen" className="hover:text-blue-600">Leistungen</a>
            <a href="#erfahrung" className="hover:text-blue-600">Erfahrung</a>
            <a href="#kontakt" className="hover:text-blue-600">Kontakt</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
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

        <section id="projekte" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8">Aktuelle Projekte</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Project 
              title="Lernplattform für Datenbanken" 
              description="Eine open-source interaktive Plattform zum Erlernen moderner Datenbankparadigmen. Entwickelt mit React und JavaScript." 
              technologies={["React", "JavaScript"]} 
              link="https://github.com/VaneMeyer/nosqlconcepts" />
              <Project 
              title="Portfolio Website" 
              description="Moderne, responsive Portfolio-Website mit React und Tailwind CSS. Open Source als Referenz für andere Entwickler." 
              technologies={["React", "JavaScript", "Tailwind"]} 
              link="https://github.com/Ranelkin/portfolio-website" 
            />
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8">Meine Leistungen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold">Webentwicklung</h4>
                </div>
                <p className="text-gray-600">Entwicklung moderner, responsiver Webseiten und Webanwendungen mit React und JavaScript</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold">Prozessautomatisierung</h4>
                </div>
                <p className="text-gray-600">Entwicklung und Optimierung von Skripten und Software für Prozessautomatisierung</p>
              </div>
            </div>
          </div>
        </section>

        <section id="erfahrung" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8">Berufliche Erfahrung</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Web Entwickler</h4>
                  <span className="text-gray-600">Okt 2024 - Heute</span>
                </div>
                <p className="text-gray-600">Entwicklung einer Online-Lernplattform für Studierende an der Goethe Universität</p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">ETL-Entwickler (Werkstudent)</h4>
                  <span className="text-gray-600">Mai 2024 - Sep 2024</span>
                </div>
                <p className="text-gray-600">ING DiBa - Weiterentwicklung und Optimierung von ETL-Prozessen und Datenbankdesign</p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">Tutor für Datenbanken</h4>
                  <span className="text-gray-600">Mai 2024 - Jul 2024</span>
                </div>
                <p className="text-gray-600">Goethe Universität - Übungsleitung und Betreuung für Studierende im Modul "Programmierung von Datenbanken"</p>
              </div>
              <div className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">ETL-Entwickler (Praktikum)</h4>
                  <span className="text-gray-600">Aug 2023 - Dez 2023</span>
                </div>
                <p className="text-gray-600">ING DiBa - ETL-Pipeline Entwicklung, SQL-Entwicklung und Datenbankdesign</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8">Fertigkeiten & Kentnisse</h3>
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

        <section id="kontakt" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
            <div className="flex items-center justify-center gap-2">
              <CopyToClipboard text="ranelkin@icloud.com" title="Email kopieren"/>
            </div>
            <p className="text-gray-600 mt-4">Ich freue mich auf Ihre Anfrage!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;