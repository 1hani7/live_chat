function ProfileName() {
    return (
        <form className="d-flex flex-column row-gap-3">
            <div className="">
                <label className="form-label fw-bold"
                    htmlFor="profileName">프로필 이름 수정</label>
                <div className="input-group">
                    <input className="form-control" type="text" id='profileName'
                        placeholder="현재이름" />
                    <button className="btn btn-outline-primary
                    input-group-text">확인</button>
                </div>
            </div>
        </form>
    );
}

export default ProfileName;