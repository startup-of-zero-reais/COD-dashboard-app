import React, { MouseEvent, useCallback, useState } from "react"
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaBook } from "react-icons/fa";

type ArtifactsButtonProps = {
    artifacts: any[]
}

export const ArtifactsButton = ( { artifacts }: ArtifactsButtonProps ) => {

    const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null)

    const open = Boolean(anchorEl)

    const handleOpen = useCallback(( e: MouseEvent<HTMLButtonElement> ) => {
        setAnchorEl(e.currentTarget)
    }, [])

    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    if (artifacts.length === 0) {
        return null
    }

    return (
        <>
            <IconButton
                aria-controls={ "basic-artifacts" }
                aria-haspopup={ "true" }
                aria-expanded={ "true" }
                onClick={ handleOpen }
            >
                <FaBook/>
            </IconButton>

            <Menu
                id={ "basic-artifacts" }
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                MenuListProps={ {
                    'aria-labelledby': 'basic-button'
                } }
            >
                { artifacts.map(ItemsHandler()) }
            </Menu>
        </>
    )
}

const ItemsHandler = () => ( artifact: any ) => {
    return (
        <MenuItem>{ artifact.label }</MenuItem>
    )
}