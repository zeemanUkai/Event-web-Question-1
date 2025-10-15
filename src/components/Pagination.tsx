type Props = {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: Props) {
    return (
        <div style={{ marginTop: "15px" }}>
            <button disabled={page === 1} onClick={() => onChange(page - 1)}>
                Prev
            </button>
            <span style={{ margin: "0 10px" }}>
                Page {page} of {totalPages}
            </span>
            <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
                Next
            </button>
        </div>
    );
}
