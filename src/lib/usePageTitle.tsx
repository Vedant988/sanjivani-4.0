import { useEffect } from "react";

const SITE_BASE = "Team Sanjivani 4.0";

export function usePageTitle(title?: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${SITE_BASE} | ${title}` : SITE_BASE;
    document.title = fullTitle;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
