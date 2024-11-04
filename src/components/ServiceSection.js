import React, { useState } from 'react';
import { Code, Database, ChevronDown } from 'lucide-react';


const webDevServices = [
    {
        title: "Statische Webseiten",
        description: "Erstellung ansprechender und benutzerfreundlicher Webseiten, die auf allen Geräten optimal funktionieren.",
        technologies: ["Responsive Design", "Benutzerfreundlich", "Modern", "Schnell", "Sicher"]
    },
    {
        title: "Web Anwendungen",
        description: "Entwicklung interaktiver Lösungen für komplexere Geschäftsanforderungen, wie Buchungssysteme oder Kundenportale.",
        technologies: ["Interaktiv", "Maßgeschneidert", "Skalierbar", "Wartungsfreundlich"]
    },
    {
        title: "Webseitenpflege",
        description: "Regelmäßige Wartung, Updates und Optimierung bestehender Webseiten für maximale Leistung und Sicherheit.",
        technologies: ["Wartung", "Aktualisierung", "Optimierung", "Support"]
    }
];

const automationServices = [
    {
        title: "Prozessoptimierung",
        description: "Automatisierung wiederkehrender Arbeitsabläufe zur Zeitersparnis und Fehlervermeidung.",
        technologies: ["Zeit sparen", "Fehler reduzieren", "Effizienz steigern", "Kosten senken"]
    },
    {
        title: "Datenverarbeitung",
        description: "Effiziente Verwaltung und Analyse Ihrer Geschäftsdaten für bessere Entscheidungen.",
        technologies: ["Datenanalyse", "Berichtserstellung", "Visualisierung", "Planung"]
    },
    {
        title: "System-Integration",
        description: "Verbindung verschiedener Systeme für einen nahtlosen Arbeitsablauf.",
        technologies: ["Systemverknüpfung", "Datenaustausch", "Workflow", "Automatisierung"]
    }
];

// Rest of the component remains the same with the ServiceCard and ServiceDetail structure
const ServiceSection = () => {
    const [activeService, setActiveService] = useState(null);

    const ServiceDetail = ({ type }) => {
        const services = type === 'web' ? webDevServices : automationServices;
        const title = type === 'web' ? 'Webentwicklung' : 'Prozessautomatisierung';
        const Icon = type === 'web' ? Code : Database;

        return (
            <div className="overflow-hidden">
                <div className="transform transition-all duration-500 ease-in-out origin-top">
                    <div className="mt-8">
                        <div className="flex items-center gap-4 mb-8">
                            <Icon className="w-8 h-8 text-blue-600"/>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                {title}
                            </h1>
                        </div>
                        
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                                    <h3 className="font-bold text-xl mb-4 dark:text-white">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ServiceCard = ({ type, title, description, icon: Icon }) => (
        <div 
            onClick={() => setActiveService(activeService === type ? null : type)}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer relative group"
        >
            <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-blue-600"/>
                <h4 className="font-bold dark:text-white">
                    {type === 'web' ? 'Webentwicklung' : 'Prozessautomatisierung'}
                </h4>
                <ChevronDown 
                    className={`w-5 h-5 ml-auto transition-transform duration-300 text-blue-600
                        ${activeService === type ? 'rotate-180' : 'rotate-0'}
                        opacity-0 group-hover:opacity-100
                    `}
                />
            </div>
            <p className="text-gray-600 dark:text-gray-300">
                {type === 'web' 
                    ? 'Professionelle Webseiten und Online-Lösungen für Ihr Unternehmen' 
                    : 'Vereinfachung und Optimierung Ihrer Geschäftsprozesse'}
            </p>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Meine Leistungen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceCard 
                    type="web"
                    title="Digitale Präsenz"
                    icon={Code}
                />
                <ServiceCard 
                    type="automation"
                    title="Digitale Effizienz"
                    icon={Database}
                />
            </div>
            
            {activeService && <ServiceDetail type={activeService} />}
        </div>
    );
};

export default ServiceSection;