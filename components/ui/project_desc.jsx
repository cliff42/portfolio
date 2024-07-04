'use client'

import React from 'react';

const ProjectDesc = ({ description }) => {
    return (
        <p className="text-center text-lg my-6 text-gray-600">
            {description}
        </p>
    );
};

export { ProjectDesc };