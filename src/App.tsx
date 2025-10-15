import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchEvents } from "./api/fetchEvents";
import type { Event } from "./api/fetchEvents";
import EventCard from "./components/EventCard";
import EventDetails from "./components/EventDetails";
import Pagination from "./components/Pagination";
import { styles } from "./style/styles";

export default function App() {
  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const [search, setSearch] = useState("");
  const [petsOnly, setPetsOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Event | null>(null);
  const perPage = 3;

  if (isLoading) return <p style={styles.loading}>Loading events...</p>;
  if (error) return <p style={styles.error}>Failed to load events.</p>;

  const filtered = events.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) &&
      (!petsOnly || e.petsAllowed)
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const startIndex = (page - 1) * perPage;
  const paginated = filtered.slice(startIndex, startIndex + perPage);

  if (selected)
    return (
      <div style={styles.centerContainer}>
        <div style={styles.cardContainer}>
          <EventDetails event={selected} onBack={() => setSelected(null)} />
        </div>
      </div>
    );

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>🎟️ Event Explorer</h1>

        <div style={styles.searchFilter}>
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            style={styles.input}
          />
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={petsOnly}
              onChange={(e) => {
                setPetsOnly(e.target.checked);
                setPage(1);
              }}
            />{" "}
            Pets Allowed
          </label>
        </div>

        <div style={styles.eventsList}>
          {paginated.map((event) => (
            <EventCard key={event.id} event={event} onSelect={setSelected} />
          ))}
        </div>

        {filtered.length === 0 && <p>No events found.</p>}

        {filtered.length > 0 && (
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        )}
      </div>
    </div>
  );
}

