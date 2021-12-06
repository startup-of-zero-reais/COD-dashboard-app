import { ReactNode } from "react"

export const RenderIf = ( condition: boolean, children: ReactNode ) => {
    if (condition) {
        return children
    }

    return null
}