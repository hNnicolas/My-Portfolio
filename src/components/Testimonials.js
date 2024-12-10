import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { getTranslatedProjects, testimonials } from "../data";
import { getTranslatedTestimonials } from "../data";
import { useTranslation } from "react-i18next";

export default function Testimonials() {

    const { t } = useTranslation("common");
    const translatedTestimonials = getTranslatedTestimonials(t);

    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    {t('testimonials.title')}
                </h1>
                <div className="flex flex-wrap m-4">
                    {translatedTestimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                                <p className="leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*<p className="container px-5 py-10 mx-auto text-center">
                {t('testimonials.link')} {' '}
                <a href="https://www.linkedin.com/in/nicolas-huang-9b068713b/">
                    <img
                        alt="LinkedIn"
                        src="/linkedin.svg"
                        className="w-6 h-6 inline-block hover:bg-gray-700 rounded"
                    />
                </a>
            </p> */}
        </section>
    );
}
