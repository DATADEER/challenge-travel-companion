# Fetching Concept

At the heart the solution uses **SWR** (stale-while-revalidate) to fetch data from an API.
SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
I've extended the implementation, so it also stores the local cache inside localStorage. This retaining data while being offline.
I specifically used the `useSWR` hook implementation of the SWR strategy from https://swr.vercel.app/

## App Explained
The app represents the travel-companion through a mock frontend and a mock api built with [next.js](https://nextjs.org/).
* The web-app launches on http://localhost:3000/
* The data driven features of the travel-companion are represented through gray boxes. The random words in the boxes represent the latest data fetched from the server. This way it's possible to see if the cache has been revalidated.
* For this experiment I assumed that the user always enters the page through the login on `/` and gets redirected to `/home`. The data is then preloaded on `\home`
* The api is mocked through next.js api routes. The response times of each route is slightly different to simulate a real backend. (see /pages/[api](pages%2Fapi))
* For reference. The app should look like this: https://share.cleanshot.com/jZGWxqCC

## Timing
The data is fetched and the cache revalidated under the following conditions:
* User goes from **offline to online**
* User **refocuses** on the tab (e.g. after switching to another tab)
* The app manually calls a **"mutation" function** that revalidates the cache certain use-cases. For example if you need an updated list of booked "extras" because the user just booked an "extra". Then this mutation requests the new list based on the booking event and updates the cache. (see `selectExtra()` in [ExtrasPicker.tsx](components%2FExtrasPicker.tsx))
* The app manually **preloads data** that is not visible on the `/home` screen. This way all data is cached to localStorage for offline usage as soon as the user logs in for the first time. But it doesn't prevent the user from using the app because the prefetching is happening in the background (see [usePreloadHiddenData.ts](shared%2Fhooks%2FusePreloadHiddenData.ts))
* Selected requests have **fixed polling** intervals. For example the log of chat messages is requested every 5 seconds. This way the user always sees the latest messages. (see [useChat.ts](shared%2Fhooks%2FuseChat.ts))
* The component that's using the hook is **rendered**. For example [WeatherDisplay.tsx](components%2FWeatherDisplay.tsx) triggers a request through [useWeather.ts](shared%2Fhooks%2FuseWeather.ts)
* User clicks on the **refresh button** in the browser

All these timing events together ensure that the data is up-to-date without having to implement a subscription logic like with websockets on client and server.


## Implementation in React
useSWR offers a React hook that exposes the `data`, `loading`-state, `errors` and a revalidation function (`mutate()`).
By default, a useSWR request is triggered immediately once the connected component renders. The `mutate()` function is used to manually trigger a revalidation.
I used a custom cache provider for SWR that stores the data in localStorage. It's implemented in [WithLocalStorageSWRConfig.tsx](shared%2FHOC%2FWithLocalStorageSWRConfig.tsx)

### Advantages
Compared to using barebone fetch requests you can use the hooks in as many places as you want without major drawbacks. Every request is cached and the data will always be taken from the cache first.
This also helps to reduce "prop drilling" because the hooks can be called inside child components instead of passing data down from parents to children.

### Room for improvement
* localStorage is not the most performant solution to store the data. I would try out indexedDB to increase performance.
* the preloaded data is re-fetched every time the user visits the home page. This is not necessary
* localStorage is not encrypted. This is a security risk for sensitive data. I would prevent sensitive data from being stored in the cache or encrypt it.
* polling the chat log is not ideal because it's not real-time. I would use websockets or service-workers if real-time communication makes sense for the use-case.
* for a true offline experience I would reach for a PWA (progressive web app) solution. Using libraries like [next-pwa](https://www.npmjs.com/package/next-pwa). This would allow to also cache static assets like images, fonts, etc. and make the app available offline.
