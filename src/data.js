import htmlLogo from './assets/logos/html.webp';
import cssLogo from './assets/logos/css.webp';
import javascriptLogo from './assets/logos/javascript.webp';
import tailwindLogo from './assets/logos/tailwind.webp';
import reactLogo from './assets/logos/react.webp';
import reduxLogo from './assets/logos/redux.webp';
import sassLogo from './assets/logos/sass.webp';
import mySqlLogo from './assets/logos/mysql.webp';
import nodejsLogo from './assets/logos/nodejs.webp';
import mongoDBLogo from './assets/logos/mongodb.webp';
import gitLogo from './assets/logos/git.webp';
import trelloLogo from './assets/logos/trello.webp';
import figmaLogo from './assets/logos/figma.webp';
import ThreejsLogo from './assets/logos/Three.js.webp';
import webGLLogo from './assets/logos/webgl.webp';

import phpLogo from './assets/logos/php.webp';
import javaLogo from './assets/logos/java.webp';
import laravelLogo from './assets/logos/laravel.webp';
import umlLogo from './assets/logos/uml.webp';
import kubernetesLogo from './assets/logos/kubernetes.webp';

export const getTranslatedProjects = (t) => [
  {
    title: t("project.FreshlyRestaurant.title"),
    subtitle: t("project.FreshlyRestaurant.subtitle"),
    description: t("project.FreshlyRestaurant.description"),
    image: "./Freshly_Restaurant.gif",
    link: "https://newyork-freshly-restaurant.vercel.app/",
  },
  {
    title: t("project.Carnet_de_voyage.title"),
    subtitle: t("project.Carnet_de_voyage.subtitle"),
    description: t("project.Carnet_de_voyage.description"),
    image: "./Carnet_de_voyage.gif",
    link: "https://hello-world-agency.vercel.app/",
  },
  {
    title: t("project.cabinet_medical.title"),
    subtitle: t("project.cabinet_medical.subtitle"),
    description: t("project.cabinet_medical.description"),
    image: "./cabinet_medical.gif",
    link: "https://cabinet-medical-berthe.vercel.app/",
  },
  {
    title: t("project.haunted_house.title"),
    subtitle: t("project.haunted_house.subtitle"),
    description: t("project.haunted_house.description"),
    image: "./haunted_house.gif",
    link: "https://haunted-house-ghost.vercel.app/",
  },
  {
    title: t("project.coffee_smoke_shader.title"),
    subtitle: t("project.coffee_smoke_shader.subtitle"),
    description: t("project.coffee_smoke_shader.description"),
    image: "./Coffee_Smoke_Shader.gif",
    link: "https://3d-coffee-smoke-shader.vercel.app/",
  },
  {
    title: t("project.fish-ocean.title"),
    subtitle: t("project.fish-ocean.subtitle"),
    description: t("project.fish-ocean.description"),
    image: "./fish-ocean.gif",
    link: "https://fish-ocean.vercel.app/",
  },
  {
    title: t("project.earth.title"),
    subtitle: t("project.earth.subtitle"),
    description: t("project.earth.description"),
    image: "./earth.gif",
    link: "https://3d-earth-shader.vercel.app/",
  },
  {
    title: t("project.terrain.title"),
    subtitle: t("project.terrain.subtitle"),
    description: t("project.terrain.description"),
    image: "./terrain.gif",
    link: "https://3d-earth-shader.vercel.app/",
  },
  {
    title: t("project.raging-sea.title"),
    subtitle: t("project.raging-sea.subtitle"),
    description: t("project.raging-sea.description"),
    image: "./raging-sea.gif",
    link: "https://raging-sea-project.vercel.app/",
  },
  {
    title: t("project.helmet.title"),
    subtitle: t("project.helmet.subtitle"),
    description: t("project.helmet.description"),
    image: "./helmet.gif",
    link: "https://3d-helmet.vercel.app/",
  },
  {
    title: t("project.nightgalaxy.title"),
    subtitle: t("project.nightgalaxy.subtitle"),
    description: t("project.nightgalaxy.description"),
    image: "./nightgalaxy.gif",
    link: "https://nightgalaxy.netlify.app/",
  },
  {
    title: t("project.galaxy-generator.title"),
    subtitle: t("project.galaxy-generator.subtitle"),
    description: t("project.galaxy-generator.description"),
    image: "./galaxy-generator.gif",
    link: "https://3dgalaxy-generator.netlify.app/",
  },
];

export const getTranslatedTestimonials = (t) => [
  {
    quote: t("testimonials.testimonial_one.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_one.name"),
  },
  {
    quote: t("testimonials.testimonial_two.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_two.name"),
  },
  {
    quote: t("testimonials.testimonial_three.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_three.name"),
  },
  {
    quote: t("testimonials.testimonial_four.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_four.name"),
  },
  {
    quote: t("testimonials.testimonial_five.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_five.name"),
  },
  {
    quote: t("testimonials.testimonial_six.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_six.name"),
  },
  {
    quote: t("testimonials.testimonial_seven.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_seven.name"),
  },
]

export const skills = [
  { name: "Html", image: htmlLogo },
  { name: "Css", image: cssLogo },
  { name: "Tailwind", image: tailwindLogo },
  { name: "JavaScript", image: javascriptLogo },
  { name: "React", image: reactLogo },
  { name: "Redux", image: reduxLogo },
  { name: "Sass", image: sassLogo },
  { name: "MySQL", image: mySqlLogo },
  { name: "Node.js", image: nodejsLogo },
  { name: "MongoDb", image: mongoDBLogo },
  { name: "Git", image: gitLogo },
  { name: "Figma", image: figmaLogo },
  { name: "Trello", image: trelloLogo },
  { name: "Three.js", image: ThreejsLogo },
  { name: "WebGL", image: webGLLogo },
];

export const skillsInProgress = [
  { name: "Php", image: phpLogo },
  { name: "Java", image: javaLogo },
  { name: "Laravel", image: laravelLogo },
  { name: "Uml", image: umlLogo },
  { name: "Kubernetes", image: kubernetesLogo },
]