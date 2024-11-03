import React  from "react";



const SkillsSection = ({title, skills}) => {
    
    return (
        <div>
            <h4 className="font-bold mb-4 dark:text-white">{title}</h4>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-50 rounded-full shadow-sm hover:bg-blue-50 hover:shadow transition-all duration-300">
                      {skill}
                </span>
                  ))}
            </div>
        </div>
    )
}

export default SkillsSection; 