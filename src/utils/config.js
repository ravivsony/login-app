require("dotenv").config()
export const config = {
    GHOST_API_KEY: process.env.REACT_APP_GHOST_API_KEY || "",
    API_URL: process.env.REACT_APP_API_URL || `https://ghost-blog.ipxp.in/ghost/api/v3/content`
}
