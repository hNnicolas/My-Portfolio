import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, skillsInProgress } from "../data";
import { useTranslation } from "react-i18next";

export default function Skills() {

    const { t } = useTranslation("common");

    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                {/* Section principale */}
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        {t('skills.title')}
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        {t('skills.description')}
                    </p>
                </div>
                {/* Liste des compétences acquises */}
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-6 h-6 flex-shrink-0 mr-4"
                                />
                                <span className="title-font font-medium text-white">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compétences en cours */}
                <div className="text-center mt-20">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        {t('skillsInProgress.title')}
                    </h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        {t('skillsInProgress.description')}
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skillsInProgress.map((skill, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-6 h-6 flex-shrink-0 mr-4"
                                />
                                <span className="title-font font-medium text-white">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
