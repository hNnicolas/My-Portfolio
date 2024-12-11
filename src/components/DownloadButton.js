import React from 'react';
import { useLanguage } from './contexts/LanguageContext';

function DownloadButton() {

    const { language } = useLanguage();

    const handleDownload = () => {
        const downloadUrl = language === 'fr' ? '/CV-Nicolas.pdf' : '/CV-Nicolas_English.pdf';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', language === 'fr' ? 'CV-Nicolas.pdf' : 'CV-Nicolas_English');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>
            <img
                alt="CV"
                src="/icons-resume.png"
                className="w-6 h-6 inline-block hover:bg-gray-900"
            />
        </button>
    );
}

export default DownloadButton;
