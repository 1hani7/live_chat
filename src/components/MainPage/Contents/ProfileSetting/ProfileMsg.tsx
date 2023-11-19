function ProfileMsg() {
    return (  
        <form className="">
            <textarea className="w-100 p-3 rounded border"
            placeholder="현재 상태메세지"
            style={{resize:'none', outline:'none'}}></textarea>
            <div className="d-flex">
                <button className="btn btn-primary ms-auto">수정</button>
            </div>
        </form>
    );
}

export default ProfileMsg;