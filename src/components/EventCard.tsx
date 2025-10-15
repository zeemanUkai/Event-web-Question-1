import type { Event } from "../api/fetchEvents";

type Props = {
    event: Event;
    onSelect: (event: Event) => void;
};

export default function EventCard({ event, onSelect }: Props) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                background: "#fafafa",
            }}
        >
            <h3 style={{ margin: "0 0 5px", color: "#222" }}>{event.title}</h3>
            <p style={{ margin: "5px 0", color: "#555" }}>
                {event.date} — {event.location}
            </p>
            <p style={{ margin: "5px 0", color: "#777" }}>
                Organizer: {event.organizer}
            </p>
            <p style={{ margin: "5px 0", color: "#777" }}>
                Pets Allowed: {event.petsAllowed ? "✅" : "❌"}
            </p>
            <button
                onClick={() => onSelect(event)}
                style={{
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "8px 12px",
                    cursor: "pointer",
                }}
            >
                View Details
            </button>
        </div>
    );
}
