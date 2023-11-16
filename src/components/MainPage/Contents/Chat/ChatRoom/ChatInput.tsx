export default function ChatInput() {
    return (
        <div className="w-100
        input-group"
        style={{ height: '60px' }}>
            <textarea className="form-control d-flex align-items-center h-100 pt-3"
            name="chatWrite" id="chatWrite"
            style={{ resize: 'none' }}>
            </textarea>
            <button className="input-group-text btn btn-primary px-4 fs-4">
                <i className="bi bi-send"></i>
            </button>
        </div>
    )
}