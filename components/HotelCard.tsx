import Link from "next/link";

export default function HotelCard({ hotel }: { hotel: any }) {
    return (
        <div className="border rounded p-4 space-y-2">
            <h3 className="text-lg font-semibold">
                <Link href={`/hotels/${hotel.id}`}>{hotel.name}</Link>
            </h3>

            <p className="text-sm text-gray-600">
                {hotel.city} • ⭐ {hotel.star_rating} • ${hotel.price_per_night}/night
            </p>

            {hotel.explanation && (
                <p className="text-sm bg-gray-50 p-2 rounded">
                    🤖 {hotel.explanation}
                </p>
            )}
        </div>
    );
}
