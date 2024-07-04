'use client'

import React from 'react';
import { Badge } from './badge';

const ProjectTechnologies = ({ technologies }) => {
    return (
        <div>
            <div className="text-center mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Technologies Used:</h3>
            </div>
            <div className="flex gap-2 justify-center mb-10 mt-4">
                {technologies.map((tech, index) => (
                    <Badge key={index} className={`px-3 py-1 ${tech.bgColor} text-white rounded-full text-sm border-2 ${tech.borderColor} shadow`}>{tech.name}</Badge>
                ))}
            </div>
        </div>
    );
};

export { ProjectTechnologies };