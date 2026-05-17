import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adventist Giving Luzon",
    short_name: "Giving Luzon",
    description: "Installable giving access for Adventist churches and ministries across Luzon.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#F7F1E3",
    theme_color: "#0A1F44",
    categories: ["finance", "lifestyle", "productivity"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    shortcuts: [
      {
        name: "Give Now",
        short_name: "Give",
        description: "Open the demo donation form.",
        url: "/donate",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
      },
      {
        name: "Churches",
        short_name: "Churches",
        description: "Browse sample churches in Luzon.",
        url: "/churches",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
      },
      {
        name: "Media Ministries",
        short_name: "Media",
        description: "Support Hope Channel Philippines and AWR 89.1 FM.",
        url: "/ministries",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
      }
    ]
  };
}
