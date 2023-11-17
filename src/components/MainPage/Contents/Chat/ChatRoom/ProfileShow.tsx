
export default function ProfileShow() {
    interface temp {
        profileImg: string;
        profileName: string;
        userId: string;
    }
    const temp: temp[] = [
        {
            profileImg: '',
            profileName: 'James Booker',
            userId: '@james-312'
        }
    ]

    return (
        <div className="d-flex align-items-center shadow-sm px-3 py-2 rounded">
            {
                temp.map((item, idx) => (
                    <div className='d-flex w-100' key={idx}>
                        <div className="rounded-circle bg-primary"
                            style={{ width: '60px', height: '60px' }}>
                        </div>
                        <div className="d-flex flex-column ms-3">
                            <p className="p-0 m-0 fw-bold">{item.profileName}</p>
                            <p className="p-0 m-0 text-secondary">{item.userId}</p>
                        </div>
                        <button type='button' className="btn text-secondary fs-5 p-0 ms-auto">
                            <i className="bi bi-box-arrow-left"></i> EXIT
                        </button>
                    </div>
                ))
            }
        </div>
    )
}