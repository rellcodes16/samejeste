import { renderToStaticMarkup } from "react-dom/server";
import blogMap from "./BlogMap";

export function getReadingTimeFromSlug(slug) {
  const BlogComponent = blogMap[slug];
  if (!BlogComponent) return null;

  const html = renderToStaticMarkup(<BlogComponent />);
  const plainText = html.replace(/<[^>]*>/g, ' ');
  const wordCount = plainText.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTime} min read`;
}
