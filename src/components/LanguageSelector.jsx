import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext';

export const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [t, i18n] = useTranslation('common');
    const { setLanguage } = useLanguage();
    const menuRef = useRef(null);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang); 
        setIsOpen(false); 
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // Close menu on outside click or scroll
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleMenu}
            >
                {t('nav.language')}
                <img
                    src="/translation.png"
                    alt="language choices"
                    className="w-6 h-6 inline-block"
                />
            </button>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => changeLanguage('fr')}
                        >
                            Français
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => changeLanguage('ja')}
                        >
                            日本語
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => changeLanguage('ch')}
                        >
                            中文
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            onClick={() => changeLanguage('kr')}
                        >
                            한국인
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
