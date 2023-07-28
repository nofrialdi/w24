export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        "/api/asset",
        "/api/user",
        "/product",
    ]
}
