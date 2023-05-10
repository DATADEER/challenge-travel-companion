import {useWeather} from "../shared/hooks/useWeather";
import {MockedIconComponent} from "./MockedIconComponent";

export default function WeatherDisplay({timeout}:{timeout:number}) {
    const {data, error, isLoading} = useWeather(timeout);

    if (isLoading) {
        return <div>Weather is loading...</div>
    }
    return (
        <div style={{background: "lightgray", padding: "16px 32px", marginBottom: "18px"}}>
            <h3 style={{marginBottom: 0}}>Weather</h3>
            <p style={{margin: 0}}>{data.text}</p>
            <MockedIconComponent name={"WEATHER"}/>
        </div>
    )

}
