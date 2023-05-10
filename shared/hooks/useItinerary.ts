import useSWR from "swr";

export function useItinerary(timeout: number){
    const {data, error, isLoading} = useSWR(`/api/itinerary/${timeout}`)

    return {
        data,
        isLoading,
        error
    }
}
