import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

// Add each new page here when it ships.
const routes = ["", "/what-we-do", "/projects", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${SITE_URL}${path}` }));
}
