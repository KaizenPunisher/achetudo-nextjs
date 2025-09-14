import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ache Tudo",
    short_name: "Ache Tudo",
    theme_color: "#B1E8F3",
    background_color: "#B1E8F3",
    display: "fullscreen",
    orientation: "any",
    scope: "/",
    start_url: "/",
    icons: [
      { src: "/icons-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icons-256.png", type: "image/png", sizes: "256x256" },
      { src: "/icons-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
