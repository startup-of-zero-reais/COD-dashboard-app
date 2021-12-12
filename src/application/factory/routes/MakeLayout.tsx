import React from "react"
import { MainLayout } from "../../../presentation/components";
import {
    avatarRoutesHandler,
    mainNavigation,
    profileNavigation,
    routesHandler,
    subNavigation
} from "../../../data/routes/routes-map";

export const MakeLayout = () => {
    const mainLinks = routesHandler(mainNavigation, 'home', 'myCourses', 'myBought', 'forum')
    const subLinks = routesHandler(subNavigation, 'support', 'privacy', 'terms-of-use')
    const headerLinks = avatarRoutesHandler(profileNavigation, 'profile', 'profile.my-account')

    return (
        <MainLayout mainNavigation={ mainLinks } subNavigation={ subLinks } headerNavigation={ headerLinks }/>
    )
}