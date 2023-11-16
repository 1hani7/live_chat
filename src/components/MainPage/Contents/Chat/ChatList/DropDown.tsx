export default function DropDown(){
    return(
        <div className="dropdown">
            <button className="btn p-0 fs-3 dropdown-toggle"
            type='button' data-bs-toggle='dropdown'>
                <i className="bi bi-filter"></i>
            </button>
            <ul className='dropdown-menu'>
                <li className="dropdown-item">최신순</li>
                <li className="dropdown-item">이름순</li>
            </ul>
        </div>
    )
}