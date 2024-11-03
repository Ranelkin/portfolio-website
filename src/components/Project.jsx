import React from "react";
import { Globe } from "lucide-react"; 
const Project = ({title, description, technologies, link}) => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-bold mb-2">{title}</h4>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex gap-2">
                    {technologies.map((tech)=> (<span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{tech}</span>))}
                    <a href={link} target="_blank" rel="noreferrer" ><Globe /></a>
                </div>
        </div> 
    )
}

export default Project; 