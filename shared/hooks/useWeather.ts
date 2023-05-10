import useSWR from "swr";
import {fetcher} from "../fetcher";

export function useWeather(timeout: number){
    const {data, error, isLoading} = useSWR(`/api/weather/${timeout}`)

    return {
        data,
        isLoading,
        error
    }
}
