import React, { useEffect, useState } from 'react';
import { BellIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Link href="/">
                    <a>
                        <img
                            src="https://rb.gy/ulxxee"
                            width={100}
                            height={100}
                            className="cursor-pointer object-contain"
                        />
                    </a>
                </Link>
                <ul className="hidden space-x-4 md:flex">
                    <Link href="/">
                        <li className="headerLink">Home</li>
                    </Link>
                    <Link href="/">
                        <li className="headerLink">TV Shows</li>
                    </Link>
                    <Link href="/">
                        <li className="headerLink">Movies</li>
                    </Link>
                    <Link href="/">
                        <li className="headerLink">New & Popular</li>
                    </Link>
                    <Link href="/">
                        <li className="headerLink">My List </li>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden h-6 w-6 sm:inline" />
                <BellIcon className="hidden h-6 w-6 sm:inline" />
                <Link href="/account">
                    <UserIcon className="hidden h-6 w-6 sm:inline" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
