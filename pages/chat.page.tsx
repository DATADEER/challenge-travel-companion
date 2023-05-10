import Chat from "../components/Chat";
import Link from "next/link";
import ExtrasPicker from "../components/ExtrasPicker";

export default function ChatPage() {
  return (
      <div>
          <h1>Chat Page</h1>
          <Link style={{marginBottom:"24px", display: "block"}} href={"/home"}>Home</Link>
          <Chat timeout={4000}/>
          <ExtrasPicker timeout={500}/>
      </div>
  )
}
