function ProfilePassword() {
    return (
        <form>
            <label className="form-label fw-bold"
                htmlFor="profilePassword">비밀번호 수정</label>
            <input className="form-control mb-2" type="password" id='PasswordNow'
                placeholder="현재 비밀번호" autoComplete="false" />
            <input className="form-control mb-2" type="password" id='PasswordChange'
                placeholder="바뀐 비밀번호" autoComplete="false" />
            <input className="form-control mb-2" type="password" id='PasswordChangeCheck'
                placeholder="바뀐 비밀번호 확인" autoComplete="false" />
            <div className="d-flex">
                <button className="btn btn-outline-primary ms-auto">확인</button>
            </div>
        </form>
    );
}

export default ProfilePassword;