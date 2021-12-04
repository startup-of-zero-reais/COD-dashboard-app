import React, { MouseEvent, useCallback, useState } from "react"
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { Avatar, Button, InputAdornment, Menu, MenuItem, TextField, Typography } from "@mui/material";
import styles from './main.module.scss'
import { useAuth } from "../../contexts/auth";

export const Header = () => {
    const { user, signOut } = useAuth()

    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = useCallback(( event: MouseEvent<HTMLButtonElement> ) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <header className={ styles.header }>
            <div className={ styles.logo }>
                &lt; Code Craft Club &gt;
            </div>

            <div className={ styles.searchBox }>
                <TextField
                    type={ "search" }
                    color={ "secondary" }
                    variant={ "outlined" }
                    inputMode={ "search" }
                    fullWidth
                    InputProps={ {
                        startAdornment: (
                            <InputAdornment position={ "start" }>
                                <FiSearch/>
                            </InputAdornment>
                        )
                    } }
                    size={ "small" }
                    placeholder={ "Busque por seus cursos" }
                />
            </div>

            <div className={ styles.profileButton }>
                <Button
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={ open ? 'true' : undefined }
                    onClick={ handleClick }
                    color={ "inherit" }
                >
                    <Avatar src={ `${ process.env.REACT_APP_HOST }/avatar.jpg` }/>
                    <Typography>{ user.name }</Typography>
                    <FiChevronDown/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={ anchorEl }
                    open={ open }
                    onClose={ handleClose }
                    MenuListProps={ {
                        'aria-labelledby': 'basic-button',
                    } }
                >
                    <MenuItem>Perfil</MenuItem>
                    <MenuItem>Minha conta</MenuItem>
                    <MenuItem onClick={ signOut }>Sair</MenuItem>
                </Menu>
            </div>
        </header>
    )
}