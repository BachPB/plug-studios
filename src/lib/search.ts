import { writable } from "svelte/store";
import { navItems } from "./index";
import { get } from "svelte/store";

export const searchQuery = writable("");
export const searchResults = writable<SearchResult[]>([]);

type SearchResult = {
  title: string;
  href: string;
  breadcrumb: string;
};

// Flatten navigation items into searchable array
function flattenNavItems(items: any[], parentLabel = ""): SearchResult[] {
  return items.flatMap((item) => {
    const breadcrumb = parentLabel
      ? `${parentLabel} / ${item.label}`
      : item.label;

    if (item.children) {
      return [
        ...(item.href
          ? [{ title: item.label, href: item.href, breadcrumb }]
          : []),
        ...flattenNavItems(item.children, breadcrumb),
      ];
    }

    return [{ title: item.label, href: item.href, breadcrumb }];
  });
}

// Search function
export function performSearch(query: string) {
  const items = get(navItems);
  const allPages = flattenNavItems(items);

  if (!query.trim()) {
    searchResults.set([]);
    return;
  }

  const results = allPages.filter(
    (page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.breadcrumb.toLowerCase().includes(query.toLowerCase())
  );

  searchResults.set(results);
}
