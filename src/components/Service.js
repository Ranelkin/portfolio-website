import React from "react";

const Service = ({title, description, icon}) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h4 className="font-bold">{title}</h4>
                </div>
                <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default Service; 