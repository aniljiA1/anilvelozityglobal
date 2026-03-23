import { useEffect, useState } from "react";

type Filters = Record<string, string[]>;

export function useFilters(initial: Filters) {
  const [filters, setFilters] = useState<Filters>(initial);

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value.length > 0) {
        params.set(key, value.join(","));
      }
    });

    window.history.pushState({}, "", `?${params.toString()}`);
  }, [filters]);

  return { filters, setFilters };
}
