import WeatherDisplay from "../components/WeatherDisplay";
import Link from "next/link";
import ItineraryDisplay from "../components/ItineraryDisplay";
import {usePreloadHiddenData} from "../shared/hooks/usePreloadHiddenData";

export default function Home() {

    // fire and forget the preloading of hidden data
    usePreloadHiddenData();

  return (

        <div>
            <h1>Home Page</h1>
            <Link style={{marginBottom:"24px", display: "block"}} href={"/chat"}>Open Chat</Link>
            <WeatherDisplay timeout={3000}/>
            <ItineraryDisplay timeout={100}/>
        </div>


  )
}
