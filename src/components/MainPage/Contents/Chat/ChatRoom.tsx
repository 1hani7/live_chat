import './chatRoom.css';
import ProfileShow from "./ChatRoom/ProfileShow";
import ChatShow from "./ChatRoom/ChatShow";
import ChatInput from "./ChatRoom/ChatInput";
export default function ChatRoom(){
    return(
        <div className="col-xl-8 col-auto ps-xl-5 d-flex flex-column row-gap-3
        heightControl"
        style={{flex:'1 0 auto'}}>
            <ProfileShow />
            <ChatShow />
            <ChatInput />
        </div>
    )
}