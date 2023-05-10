import {useEffect, useMemo, useRef, useState} from "react";
import {localStorageCacheProvider} from "../localStorageCacheProvider";
import {SWRConfig} from "swr";
import {fetcher} from "../fetcher";

// This Higher Order Component serves to prevent the SWRConfig from being rendered on the server.
// The localStorageCacheProvider is not compatible with SSR because it uses localStorage.
export default function withLocalStorageSWRConfig(Component:any) {
    return function SWRConfigComponent(props) {
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

        if(!isClient) {
            return null;
        }

        return (
            <SWRConfig value={{ provider: localStorageCacheProvider, fetcher: fetcher }}>
                <Component {...props} />
            </SWRConfig>
        );
    };
}
