'use client'

import React from 'react';

const ProjectImages = ({ screenshots }) => {
    return (
        <div className="grid grid-cols-2 gap-10">
            {screenshots.map((screenshot, index) => (
                <div key={index} className="mb-6">
                    <img src={screenshot.src} alt={`Screenshot ${index + 1}`} className="w-full h-48 object-cover mx-auto rounded-lg shadow-lg border-2 border-gray-200"/>
                    <p className="text-center text-sm mt-2 text-gray-600">{screenshot.description}</p>
                </div>
            ))}
        </div>
    );
};

export { ProjectImages };