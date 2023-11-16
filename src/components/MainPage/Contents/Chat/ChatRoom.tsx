import ProfileShow from "./ChatRoom/ProfileShow"
import ChatShow from "./ChatRoom/ChatShow"
import ChatInput from "./ChatRoom/ChatInput"
export default function ChatRoom(){
    return(
        <div className="w-75 ps-5 d-flex flex-column row-gap-3"
        style={{height:'95vh'}}>
            <ProfileShow />
            <ChatShow />
            <ChatInput />
        </div>
    )
}