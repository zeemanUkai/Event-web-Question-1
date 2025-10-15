export const styles: Record<string, React.CSSProperties> = {
    pageWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f6f8",
        padding: "20px",
    },
    container: {
        width: "100%",
        maxWidth: "500px", // wider for better balance
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    title: {
        textAlign: "center",
        fontSize: "1.8rem",
        marginBottom: "20px",
        color: "#333",
    },
    searchFilter: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px 12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        width: "100%",
        maxWidth: "250px",
        flexGrow: 1,
    },
    checkboxLabel: {
        fontSize: "0.95rem",
        color: "#333",
        display: "flex",
        alignItems: "center",
    },
    eventsList: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    screenCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f6f8",
    },
    loading: {
        fontSize: "1.2rem",
        color: "#555",
    },
    error: {
        fontSize: "1.2rem",
        color: "red",
    },
};