"use client"

import { useState } from 'react';
import logo from '../../../../../public/images/logo.svg';
import Image from "next/image";
import { getHeaderData } from '@/app/[local]/components/commonComponents/mockData';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
//----------------function for header--------------- 
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname("");
    const t = useTranslations();
    const HeaderData = getHeaderData(t);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className='bg-whiteshade ml-auto mr-auto p-[6px] fixed top-[0] w-full z-10'>
            <div className="container px-4 py-4 flex justify-between items-center">
                <div>
                    <Link href="/"><Image src={logo} alt="Logo" className='w-full max-w-[168px]' /></Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-6 '>
                    <nav className="md:flex space-x-6">
                        {HeaderData.map((item, index) => (
                            <Link key={index} href={item.link}
                                className={
                                    pathname === item.link
                                        ? 'text-darkblue font-semibold text-[16px] leading-[20.16px]' // Active class
                                        : 'text-[16px] font-semibold leading-[20.16px] text-lightBlack' // Inactive class
                                }
                            >
                                {item.text}
                            </Link>
                        ))}
                    </nav>
                    <button className='px-2 py-2 rounded-[4px] bg-darkblue text-[15px] font-semibold leading-[18.9px] text-left text-white'>{t("Quote")}</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden container'>
                    <nav className="bg-whiteshade">
                        {HeaderData.map((item, index) => (
                            <Link key={index} href={item.link}
                                className={
                                    pathname === item.link
                                        ? 'text-darkblue block px-4 py-2 text-[16px] font-semibold leading-[20.16px] mobile:px-0 smobile:px-0' // Active class
                                        : 'block px-4 py-2 text-[16px] font-semibold leading-[20.16px] text-lightBlack mobile:px-0 smobile:px-0' // Inactive class
                                }
                                onClick={handleLinkClick}>
                                {item.text}
                            </Link>
                        ))}
                    </nav>
                    <div className='block px-4 py-2 mobile:px-0 smobile:px-0'>
                        <button className='px-2 py-2 rounded-[4px] bg-darkblue text-[15px] font-semibold leading-[18.9px] text-left text-white'>{t("Quote")}</button>
                    </div>
                </div>
            )}
        </header>
    );
}