"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
    const [query, setQuery] = useState("");

    return (
        <div className="flex gap-2">
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="e.g. cheap and comfortable hotel in Paris"
                className="flex-1 border rounded px-4 py-3"
            />
            <button
                onClick={() => onSearch(query)}
                className="bg-black text-white px-6 rounded"
            >
                Search
            </button>
        </div>
    );
}
