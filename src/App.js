import React from "react";
import About from "./components/About";
import ContactForm from "./components/ContactForm"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {

    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <ContactForm />
            <div className="py-10">
                <Footer />
            </div>
        </main>
    );
}
