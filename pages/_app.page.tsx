import withLocalStorageSWRConfig from "../shared/HOC/WithLocalStorageSWRConfig";

export default function MyApp({ Component, pageProps }) {
    const ComponentWithSWRConfig = withLocalStorageSWRConfig(Component);
    return (
        <div>
            <ComponentWithSWRConfig {...pageProps} />
        </div>)

}
