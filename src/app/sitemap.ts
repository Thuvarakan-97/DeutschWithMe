import type { MetadataRoute } from "next";
import { availableCourses } from "@/data/courses";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const updatedAt = new Date();
  const paths = [
    "",
    "/about",
    "/contact",
    "/courses",
    ...availableCourses.map((course) => `/courses/${course.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: updatedAt,
    changeFrequency: path.startsWith("/courses/") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/courses" ? 0.9 : 0.6,
  }));
}
