import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "47vc099x",
    dataset: "production",
    apiversion: "2022-02-16",
    token: "sko6nejIP0UjWq7tcOpdCT9grfT3u7K6RSAYwwk8HCZgxq44986sBnDERi9iX8NJjTjyEkceocMoIszlROUdtGiVLnK3cNLUwC07iSD1luIZQMwJirKRiZZ0qrTiIEbBWU7hqnacsVLKgu2Iqe6gzUMNWtmQtZuWQVE2L7x8URzzIb4Ktk0s",
    useCdn: false,
})