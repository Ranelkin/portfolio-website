import React from "react";
import { Globe } from "lucide-react";

const Project = ({title, description, technologies, link}) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-bold mb-2 dark:text-white">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap items-center gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
                <a href={link} target="_blank" rel="noreferrer" className="ml-auto">
                    <Globe className="w-5 h-5 text-blue-600 hover:text-blue-700" />
                </a>
            </div>
        </div>
    );
};

export default Project;