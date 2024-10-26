import React from "react";

const WorkExperience = ({positionTitle, duration, description}) => {
 return (
    <div className="bg-white p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">{positionTitle}</h4>
                  <span className="text-gray-600">{duration}</span>
                </div>
        <p className="text-gray-600">{description}</p>
    </div>
 )
}

export default WorkExperience; 