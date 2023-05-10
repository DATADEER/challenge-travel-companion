import {MockedIconComponent} from "./MockedIconComponent";
import {useChat} from "../shared/hooks/useChat";

export default function Chat({timeout}:{timeout:number}) {
    const {data, error, isLoading} = useChat(timeout);

    if (isLoading) {
        return <div>Chat is loading...</div>
    }
    return (
        <div style={{background: "lightgray", padding: "16px 32px", marginBottom: "18px"}}>
            <h3 style={{marginBottom: 0}}>Chat</h3>
            <p style={{margin: 0}}>{data.text}</p>
            <MockedIconComponent name={"CHAT"}/>
        </div>
    )

}
