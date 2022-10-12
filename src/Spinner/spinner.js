export default function Spinner() {
    return <>
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    </>
}