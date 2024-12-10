import React from 'react';
import { useLanguage } from './contexts/LanguageContext';

function DownloadButton() {

    const { language } = useLanguage();

    const handleDownload = () => {
        const isFrench = language === 'fr';
        const downloadUrl = isFrench ? '/CV_Nicolas.pdf' : '/CV_Nicolas_English.pdf';
        const fileName = isFrench ? 'CV_Nicolas.pdf' : 'CV_Nicolas_English';

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', fileName);
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
