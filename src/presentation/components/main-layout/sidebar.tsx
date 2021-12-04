import React from "react"
import { Avatar, LinearProgress, Typography } from "@mui/material";
import styles from './main.module.scss'
import { useAuth } from "../../contexts/auth";

export type SidebarProps = {
    mainNavigation: (JSX.Element | null)[];
    subNavigation: (JSX.Element | null)[]
}

export const Sidebar = ( { mainNavigation, subNavigation }: SidebarProps ) => {
    const { user } = useAuth()

    return (
        <aside className={ styles.sidebar }>
            <div className={ styles.profile }>
                <div className={ styles.avatarBg }>
                    <Avatar sx={ { width: 80, height: 80 } } src={ `${ process.env.REACT_APP_HOST }/avatar.jpg` }/>
                </div>

                <Typography textAlign={ "center" }>
                    { user.name }
                </Typography>

                <div className={ styles.progress }>
                    <Typography>Seu progresso</Typography>
                    <LinearProgress
                        variant={ "determinate" }
                        value={ 10 }
                        color={ "secondary" }
                    />
                </div>
            </div>

            <nav className={ styles.nav }>
                { mainNavigation }
            </nav>

            <nav className={ styles.subnav }>
                { subNavigation }
            </nav>
        </aside>
    )
}