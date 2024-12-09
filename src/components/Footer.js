import React from "react";
import { useTranslation } from "react-i18next";
import KeyboardIcon from "../assets/icons/keyboard-icons.png";
import XIcon from "../assets/icons/X-icons.webp";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col items-center">

        <div className="w-full flex flex-col items-center space-y-4 mb-4 md:flex-row md:justify-end md:space-y-0 md:space-x-4">
          <a
            href="https://github.com/hNnicolas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition duration-200"
          >
            <img
              src={KeyboardIcon}
              alt="GitHub"
              className="w-8 h-8 border border-white rounded-md"
            />
            <span className="text-sm">{t("footer.code_source")}</span>
          </a>

          <a
            href="https://x.com/hf_nicolas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition duration-200"
          >
            <img src={XIcon} alt="X" className="w-8 h-8" />
            <span className="text-sm">{t("footer.connect_with_me")}</span>
          </a>
        </div>

        <p className="text-sm text-center">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
