import React from "react"
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Sidebar } from './sidebar'
import styles from './main.module.scss'

export const MainLayout = () => {
    return (
        <main className={ styles.main }>
            <Header/>
            <div className={ styles.content }>
                <Sidebar/>
                <div className={ styles.innerContent }>
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}