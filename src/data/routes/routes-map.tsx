import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaGraduationCap, FaHome, FaShoppingCart } from "react-icons/fa";
import { ImBubble2 } from "react-icons/all";
import { Link, NavLink } from "react-router-dom";
import { MenuItem } from "@mui/material";

export namespace RoutesMap {
    export type RouteNames =
        'home' | 'myCourses' | 'myBought' | 'forum'
        | 'support' | 'privacy' | 'terms-of-use'
        | 'profile' | 'profile.my-account'
    export type Route = {
        to: string
        label: ReactNode
        icon?: IconType
    }
    export type Navigation = Map<RoutesMap.RouteNames, RoutesMap.Route>
}

export const mainNavigation: RoutesMap.Navigation = new Map<RoutesMap.RouteNames, RoutesMap.Route>([
    [ 'home', {
        to: '/',
        label: 'Inicio',
        icon: FaHome
    } ],
    [ 'myCourses', {
        to: '/meus-cursos',
        label: 'Meus cursos',
        icon: FaGraduationCap
    } ],
    [ 'myBought', {
        to: '/minhas-compras',
        label: 'Minhas compras',
        icon: FaShoppingCart
    } ],
    [ 'forum', {
        to: '/forum',
        label: 'Fórum',
        icon: ImBubble2
    } ]
])

export const subNavigation: RoutesMap.Navigation = new Map<RoutesMap.RouteNames, RoutesMap.Route>([
    [ 'support', {
        to: '/suporte-alunos',
        label: 'Suporte para alunos',
    } ],
    [ 'privacy', {
        to: '/politica-privacidade',
        label: 'Política de privacidade',
    } ],
    [ 'terms-of-use', {
        to: '/termos-de-uso',
        label: 'Termos de uso',
    } ],
])

export const profileNavigation: RoutesMap.Navigation = new Map<RoutesMap.RouteNames, RoutesMap.Route>([
    [ 'profile', {
        to: '/perfil',
        label: 'Perfil'
    } ],
    [ 'profile.my-account', {
        to: '/perfil/minha-conta',
        label: 'Minha conta'
    } ]
])

function isSetRoute( route: JSX.Element | null ): boolean {
    return !!route;
}

export const avatarRoutesHandler = ( originRoute: RoutesMap.Navigation, ...routes: RoutesMap.RouteNames[] ) => {
    return routes
        .map(( route, i ) => {
            const routeInfo = originRoute.get(route)

            if (originRoute.has(route) && routeInfo) {
                return (
                    <Link to={ routeInfo.to } key={ i.toString() }>
                        <MenuItem>{ routeInfo.label }</MenuItem>
                    </Link>
                )
            }

            return null
        }).filter(isSetRoute)
}

export const routesHandler = ( originRoute: RoutesMap.Navigation, ...routes: RoutesMap.RouteNames[] ) => {
    return routes
        .map(( route, i ) => {
            const routeInfo = originRoute.get(route)

            if (originRoute.has(route) && routeInfo) {
                const Icon = routeInfo.icon
                return (
                    <NavLink
                        key={ i.toString() }
                        to={ routeInfo.to }
                    >
                        { Icon ? <Icon/> : null } { routeInfo.label }
                    </NavLink>
                )
            }

            return null
        })
        .filter(isSetRoute)
}