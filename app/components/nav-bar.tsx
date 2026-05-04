'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import headhunter from '../../public/images/logo.png'

export const NavBar = () => {
    return (
        <nav className="px-2 py-4 w-full z-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Image
                        src={headhunter}
                        alt="Logo"
                        className="w-auto h-8"
                    />
                    <div className="space-x-18">
                        <Link
                            href="/"
                            className="hover:text-blue-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="/gallery"
                            className="hover:text-blue-300"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-blue-300"
                        >
                            About
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}
