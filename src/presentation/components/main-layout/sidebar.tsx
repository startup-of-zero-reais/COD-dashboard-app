import React from "react"
import { NavLink } from 'react-router-dom'
import { Avatar, LinearProgress, Typography } from "@mui/material";
import { FaGraduationCap, FaHome, FaShoppingCart } from 'react-icons/fa'
import { ImBubbles2 } from 'react-icons/im'
import styles from './main.module.scss'
import { useAuth } from "../../contexts/auth";

export const Sidebar = () => {
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
                <NavLink to={ "/" }><FaHome/> Inicio</NavLink>
                <NavLink to={ "/meus-cursos" }><FaGraduationCap/> Meus cursos</NavLink>
                <NavLink to={ "/minhas-compras" }><FaShoppingCart/> Minhas compras</NavLink>
                <NavLink to={ "/forum" }><ImBubbles2/> Fórum</NavLink>
            </nav>

            <nav className={ styles.subnav }>
                <NavLink to={ "/suporte-alunos" }>Suporte para alunos</NavLink>
                <NavLink to={ "/politica-privacidade" }>Política de privacidade</NavLink>
                <NavLink to={ "/termos-de-uso" }>Termos de uso</NavLink>
            </nav>
        </aside>
    )
}