import { getHotel } from "@/lib/api";

type HotelPageProps = {
    params: Promise<{ id: string }>;
};

export default async function HotelPage({ params }: HotelPageProps) {
    const { id } = await params;

    // Fetch hotel from backend
    const response = await getHotel(id);
    const hotel = response.hotel;

    return (
        <main className="max-w-6xl mx-auto px-6 py-10">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
                <p className="text-gray-600">
                    {hotel.city}, {hotel.country}
                </p>
            </header>

            {/* Image */}
            {hotel.image_url && (
                <img
                    src={hotel.image_url}
                    alt={hotel.name}
                    className="w-full h-[420px] object-cover rounded-xl mb-8"
                />
            )}

            {/* Description */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About this hotel</h2>
                <p className="text-gray-700 leading-relaxed">
                    {hotel.description}
                </p>
            </section>

            {/* Key details */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Detail label="Rating" value={`${hotel.star_rating} ★`} />
                <Detail label="Type" value={hotel.hotel_type} />
                <Detail label="From / night" value={`$${hotel.price_per_night}`} />
                <Detail label="Address" value={hotel.address} />
            </section>

            {/* Amenities */}
            {hotel.amenities?.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                        {hotel.amenities.map((a: string) => (
                            <li key={a}>• {a}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Rooms */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {hotel.rooms.map((room: any) => (
                        <div
                            key={room.id}
                            className="border rounded-xl p-5 shadow-sm"
                        >
                            <h3 className="font-semibold mb-1">{room.room_type}</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Capacity: {room.capacity} guests
                            </p>
                            <p className="font-medium mb-3">
                                ${room.price_per_night} / night
                            </p>

                            <ul className="text-sm text-gray-600 mb-4">
                                {room.room_amenities.map((ra: string) => (
                                    <li key={ra}>• {ra}</li>
                                ))}
                            </ul>

                            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                Book this room
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

/* --------------------------------------------------
   Small helper component
-------------------------------------------------- */
function Detail({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-xs uppercase text-gray-500">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    );
}
