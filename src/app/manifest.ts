import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ache Tudo",
    short_name: "AcheTudo",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "../../public/logo.svg",
        sizes: "192x192",
        type: "image/svg",
      },
    ],
  };
}
