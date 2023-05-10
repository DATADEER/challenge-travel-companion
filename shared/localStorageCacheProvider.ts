export function localStorageCacheProvider(){

    const map = new Map<string, any>(JSON.parse(window.localStorage.getItem(process.env.NEXT_PUBLIC_OFFLINE_CACHE_KEY) || "[]"))

    function saveMapToLocalStorage(map: Map<string, any>){
        const appCache = JSON.stringify(Array.from(map.entries()))
        window.localStorage.setItem(process.env.NEXT_PUBLIC_OFFLINE_CACHE_KEY, appCache)
    }

    return {
        get: (key: string) => {
            return map.get(key);
        },
        set(key: string, value: any){
            map.set(key, value)
            saveMapToLocalStorage(map)
        },
        delete(key: string){
            map.delete(key)
            saveMapToLocalStorage(map)
        },
        *keys(): IterableIterator<string> {
            map.keys();
        }

    }
}
