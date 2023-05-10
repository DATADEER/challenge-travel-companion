import {MockedIconComponent} from "./MockedIconComponent";
import {useItinerary} from "../shared/hooks/useItinerary";

export default function ItineraryDisplay({timeout}:{timeout:number}) {
    const {data, error, isLoading} = useItinerary(timeout);

    if (isLoading) {
        return <div>Itinerary is loading...</div>
    }
    return (
        <div style={{background: "lightgray", padding: "16px 32px", marginBottom: "18px"}}>
            <h3 style={{marginBottom: 0}}>Itinerary</h3>
            <p style={{margin: 0}}>{data.text}</p>
            <MockedIconComponent name={"ITINERARY"}/>
        </div>
    )

}
