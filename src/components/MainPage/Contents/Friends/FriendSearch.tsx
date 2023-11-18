import FriendSearchInput from "./FriendSearch/FriendSearchInput"
import FriendSearchList from "./FriendSearch/FriendSearchList"
export default function FriendSearch(){
    return(
        <div className="d-flex flex-column h-100">
            <FriendSearchInput />
            <div className="h-75 mt-3"
            style={{flex:'1'}}>
                <FriendSearchList />
            </div>
        </div>
    )
}