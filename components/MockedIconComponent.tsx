import breakfastIcon from "public/icons/breakfast.svg"
import chatIcon from "public/icons/chat.svg"
import weatherIcon from "public/icons/weather.svg"
import itineraryIcon from "public/icons/route.svg"
import Image from "next/image";


export function MockedIconComponent({name}: {name: "CHAT" | "EXTRAS" | "WEATHER" | "ITINERARY"}){
    switch(name){
        case "CHAT":
            return <Image src={chatIcon} alt={"chat icon"} />
        case "EXTRAS":
            return <Image src={breakfastIcon} alt={"breakfast icon"} />
        case "WEATHER":
            return <Image src={weatherIcon} alt={"weather icon"} />
        case "ITINERARY":
            return <Image src={itineraryIcon} alt={"route icon"} />

    }
}
