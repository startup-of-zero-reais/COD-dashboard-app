import React from "react"
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Sidebar } from './sidebar'
import styles from './main.module.scss'

export type MainLayoutProps = {
    mainNavigation: (JSX.Element | null)[];
    subNavigation: (JSX.Element | null)[]
}

export const MainLayout = ( { mainNavigation, subNavigation }: MainLayoutProps ) => {
    return (
        <main className={ styles.main }>
            <Header/>
            <div className={ styles.content }>
                <Sidebar
                    mainNavigation={ mainNavigation }
                    subNavigation={ subNavigation }
                />
                <div className={ styles.innerContent }>
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}