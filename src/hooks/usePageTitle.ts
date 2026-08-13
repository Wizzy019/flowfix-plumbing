import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export function useSEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string,
    ) => {
      let meta = document.head.querySelector(` meta[${attribute}="${key}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);

    if (image) {
      setMeta("property", "og:image", image);
    }

    if (url) {
      setMeta("property", "og:url", url);
    }

    setMeta("property", "og:type", "website");
  }, [title, description, image, url]);
}
