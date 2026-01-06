const API = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function searchHotels(payload: any) {
    const res = await fetch(`${API}/search`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-user-id": "anon-user",   // later real user
            "x-ab-group": "A",          // backend controls learning
        },
        body: JSON.stringify(payload),
        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Search API error:", text);
        throw new Error(text || "Search failed");
    }
    return res.json();
}

export async function getHotel(id: string) {
    const res = await fetch(`${API}/hotels/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Hotel API error:", text);
        throw new Error("Hotel fetch failed");
    }

    return res.json();
}
