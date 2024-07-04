'use client'

import React from 'react';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col justify-center items-center mt-8 mb-8"> 
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className={`hover:text-green-700 ${pathname === '/' ? 'text-green-700' : ''}`}>Chris Cliff</a> /
                </li>
                <li>
                    <a href="/experience" className={`hover:text-green-700 ${pathname === '/experience/' ? 'text-green-700' : ''}`}>Experience</a> /
                </li>
                <li>
                    <a href="/projects" className={`hover:text-green-700 ${pathname === '/projects/' ? 'text-green-700' : ''}`}>Projects</a>
                </li>
            </ul>
        </nav>
    );
};

export { Nav };