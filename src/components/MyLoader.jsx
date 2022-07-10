import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        viewBox="0 0 476 124"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="48" y="8" rx="3" ry="3" width="100" height="10" />
        <rect x="48" y="26" rx="3" ry="3" width="200" height="10" />
        <rect x="0" y="56" rx="3" ry="3" width="610" height="10" />
        <rect x="0" y="72" rx="3" ry="3" width="580" height="10" />
        <rect x="0" y="88" rx="3" ry="3" width="378" height="10" />
        <circle cx="20" cy="20" r="20" />
    </ContentLoader>

)

export default MyLoader
