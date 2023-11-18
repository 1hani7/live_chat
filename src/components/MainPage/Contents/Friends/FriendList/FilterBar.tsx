export default function FilterBar() {
    return (
        <div className="d-flex flex-column flex-xl-row justify-content-between
            align-items-xl-center">
            <h3 className="fw-bolder text-body m-0 me-4 mb-2 mb-xl-0">Friends</h3>
            <form className="input-group">
                <input type="text" name='friendSearch' id='friendSearch'
                    className="form-control"
                    placeholder="search..." />
                <label htmlFor="friendSearch"
                    className="input-group-text btn btn-primary">
                    <i className="bi bi-search"></i>
                </label>
            </form>
        </div>
    )
}