import socialImage from "./assets/images/social.webp";

export const SITE: {
  name: string;
  description: string;
  website: string;
  author: string;
  profile: string;
  ogImage: string;
  copyright?: string;
  twitterUsername?: string;
  twitterDomain?: string;
} = {
  name: "Nombre del sitio web",
  description:
    "Template hecho en Astro que sirve como bootstraper para mis proyectos",
  website: "https://www.domain.com",
  author: "Name Surname",
  profile: "https://www.author.com",
  ogImage: socialImage.src,
  // copyright: "(c) Nombre de la empresa",
  // twitterUsername: "@nombredeusuario",
  // twitterDomain: "www.example.com",
} as const;
