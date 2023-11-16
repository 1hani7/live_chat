import DropDown from "./ChatList/DropDown"
import Chats from "./ChatList/Chats"
export default function ChatList() {
    return (
        <div className="w-25">
            <div className="d-flex justify-content-between
            align-items-center">
                <h3 className="fw-bolder text-body">Chat</h3>
                <DropDown />
            </div>
            <div className="overflow-scroll mt-3 pe-3 pb-4 h-100">
                <Chats />
            </div>
        </div>
    )
}