export function getUrlAPI() {
    var api_url = process.env.NEXT_PUBLIC_API_URL

    if (process.env.NODE_ENV === "development") {
        api_url = `http://${process.env.NEXT_PUBLIC_API_URL_DEV}:3003`
    } else {
        api_url = process.env.NEXT_PUBLIC_API_URL
    }

    return api_url
}