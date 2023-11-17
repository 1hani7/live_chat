
import ChatList from "./ChatList"
import ChatRoom from "./ChatRoom"

export default function Chat(){
    return(
        <div className="container-fluid h-100 bg-white px-5 py-4
        d-flex flex-column flex-xl-row row-xl">
            <ChatList />
            <ChatRoom />
        </div>
    )
}