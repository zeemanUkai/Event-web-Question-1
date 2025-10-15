import type { Event } from "../api/fetchEvents";

type Props = {
    event: Event;
    onBack: () => void;
};

export default function EventDetails({ event, onBack }: Props) {
    return (
        <div style={{ padding: "20px" }}>
            <button onClick={onBack}>⬅ Back</button>
            <h2>{event.title}</h2>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Date:</strong> {event.date} — {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Organizer:</strong> {event.organizer}</p>
            <p><strong>Pets Allowed:</strong> {event.petsAllowed ? "✅ Yes" : "❌ No"}</p>
        </div>
    );
}
