import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://safe-hi.co.kr/main",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://safe-hi.co.kr/intro",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://safe-hi.co.kr/vision",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
