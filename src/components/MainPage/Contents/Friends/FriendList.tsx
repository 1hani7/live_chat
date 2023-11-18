import FilterBar from "./FriendList/FilterBar"
import FilterList from "./FriendList/FilterList"
import './scrollbar.css';
export default function FriendList() {
    return (
        <div className="d-flex flex-column h-100">
            <div className="">
                <FilterBar />
            </div>
            <div className="overflow-scroll pe-3 mt-3">
                <FilterList />
            </div>
        </div>
    )
}