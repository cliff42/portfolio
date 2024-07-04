'use client'

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectTitle = ({ title }) => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full flex items-center justify-between">
                <a href="/projects" className="left-0 -mt-5"> <FaArrowLeft size={25} className="hover:text-green-700" /> </a>
                <h1 className="text-2xl font-bold mb-2 text-center flex-1">{title}</h1>
            </div>
            <hr className="w-full border-t border-gray-300 self-start mx-auto"/>
        </div>
    );
};

export { ProjectTitle };