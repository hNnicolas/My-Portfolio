import { MailIcon } from "@heroicons/react/solid";
import React from "react";
import DownloadButton from './DownloadButton';
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { LanguageProvider } from './contexts/LanguageContext';

export default function Navbar() {

    const { t } = useTranslation("common");

    return (
        <LanguageProvider>
            <header className="bg-gray-800 md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <p className="title-font font-medium text-white mb-4 md:mb-0">
                        <a href="#about" className="ml-3 text-xl">
                            {t('nav.name')}
                        </a>
                    </p>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                        <a href="#projects" className="mr-5 hover:text-white">
                            {t('nav.past_work')}
                        </a>
                        <a href="#skills" className="mr-5 hover:text-white">
                            {t('nav.skills')}
                        </a>
                        <a href="#testimonials" className="mr-5 hover:text-white">
                            {t('nav.testimonials')}
                        </a>
                        {' '}
                        <a href="https://www.linkedin.com/in/nicolas-huang-9b068713b/" className="mr-5 hover:bg-gray-900 rounded">
                            <img
                                alt="LinkedIn"
                                src="/linkedin.svg"
                                className="w-6 h-6 inline-block"
                            />
                        </a>
                        <a href="https://github.com/hNnicolas" className="mr-5 hover:bg-gray-900 rounded">
                            <img
                                alt="LinkedIn"
                                src="/github.png"
                                className="w-6 h-6 inline-block"
                            />
                        </a>
                        <p className="mr-5 hover:bg-gray-900 rounded">
                            <DownloadButton className="w-4 h-4 ml-1" />
                        </p>
                    </nav>
                    <a
                        href="#ContactForm"
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base mt-4 md:mt-0">
                        {t('nav.contact_me')}
                        <MailIcon className="w-4 h-4 ml-3" />
                    </a>
                    <LanguageSelector />
                </div>
            </header>
        </LanguageProvider>
    );
}