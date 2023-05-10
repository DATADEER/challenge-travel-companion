import {useEffect} from "react";
import {preload} from "swr";
import {fetcher} from "../fetcher";

export async function usePreloadHiddenData(){
    useEffect(() => {
        (async () => {
            // preloading data that's not visible on this page
            await Promise.all([preload('/api/chat/4000',fetcher),preload('/api/chat/500',fetcher)])
        })()
    },[])
}
