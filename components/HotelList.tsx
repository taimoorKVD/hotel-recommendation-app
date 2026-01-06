import HotelCard from "./HotelCard";

export default function HotelList({ hotels }: { hotels: any[] }) {
    return (
        <div className="mt-6 space-y-4">
            {hotels.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
    );
}