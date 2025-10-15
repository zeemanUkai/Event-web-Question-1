export type Event = {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
};

export async function fetchEvents(): Promise<Event[]> {
    const res = await fetch(
        "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events"
    );
    if (!res.ok) throw new Error("Failed to fetch events");
    return res.json();
}
