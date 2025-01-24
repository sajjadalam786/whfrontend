"use client";

interface CategoriesFilterState {
  search: string;
  status: string;
  sortBy: string;
}

export default function CategoriesFilter({ CategoriesFilterState }: any) {
  const [filters, setFilters] = useState<CategoriesFilterState>();
}
