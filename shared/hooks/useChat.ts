import useSWR from "swr";

export function useChat(timeout: number){
    // refreshing chat regularly to see new messages
    const {data, error, isLoading} = useSWR(`/api/chat/${timeout}`, {refreshInterval: 5000})

    return {
        data,
        isLoading,
        error
    }
}
