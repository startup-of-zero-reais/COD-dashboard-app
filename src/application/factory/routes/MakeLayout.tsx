import React from "react"
import { MainLayout } from "../../../presentation/components";
import { mainNavigation, routesHandler, subNavigation } from "../../../data/routes/routes-map";

export const MakeLayout = () => {
    const mainLinks = routesHandler(mainNavigation, 'home', 'myCourses', 'myBought', 'forum')
    const subLinks = routesHandler(subNavigation, 'support', 'privacy', 'terms-of-use')

    return (
        <MainLayout mainNavigation={ mainLinks } subNavigation={ subLinks }/>
    )
}