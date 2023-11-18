function FriendSearchInput() {
    return (
        <div className="input-group">
            <form className="input-group">
                <input type="text" name='friendSearch' id='friendSearch'
                    className="form-control"
                    placeholder="search..." />
                <label htmlFor="friendSearch"
                    className="input-group-text btn btn-primary">
                    <i className="bi bi-person"></i>
                </label>
            </form>
        </div>
    );
}

export default FriendSearchInput;