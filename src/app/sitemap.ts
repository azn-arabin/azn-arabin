import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arabin.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
    },
  ];
}
