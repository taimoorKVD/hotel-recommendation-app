"use client";

import { useState } from "react";
import { searchHotels } from "@/lib/api";
import HotelList from "@/components/HotelList";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(query: string) {
    setLoading(true);

    const res = await searchHotels({
      query,
      page: 1,
      page_size: 10,
    });

    setResults(res.hotels);
    setLoading(false);
  }

  return (
      <main className="max-w-6xl mx-auto p-6">
        <SearchBar onSearch={handleSearch} />

        {loading && <p className="mt-6">Searching…</p>}

        <HotelList hotels={results} />
      </main>
  );
}
