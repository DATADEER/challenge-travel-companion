import useSWR from "swr";

export function useExtras(timeout: number){
    const {data, error, isLoading, mutate} = useSWR(`/api/extras/${timeout}`)

    return {
        data,
        isLoading,
        error,
        mutate
    }
}
