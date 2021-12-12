import React, { FormEvent } from "react"
import classNames from "classnames";
import styles from './profile.module.scss';
import {
    Avatar,
    Box,
    Button,
    createTheme,
    Divider,
    IconButton,
    InputAdornment,
    StandardTextFieldProps,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import { IconType } from "react-icons";
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from "react-icons/fi";
import { useAuth } from "../../contexts/auth";
import { purplePalette } from "../../styles/colors";
import { usePassword } from "../../hooks/use-password";
import { PageLayout } from "../../components";

type ProfileProps = {}

export const Profile = ( _: ProfileProps ) => {
    const { user } = useAuth();
    const [ isVisible, toggleVisibility, type ] = usePassword()

    return (
        <PageLayout>
            <Typography variant={ 'h5' }>
                Perfil
            </Typography>

            <div className={ classNames(styles.contentWrapper) }>
                <div className={ classNames(styles.profileCard) }>
                    <div className={ styles.avatarBg }>
                        <Avatar sx={ { width: 80, height: 80 } } src={ `${ process.env.REACT_APP_HOST }/avatar.jpg` }/>
                    </div>

                    <span>{ `${ user.name } ${ user.lastname }` }</span>

                    <Box display={ 'block' } marginY={ 4 } width={ '90%' }>
                        <Divider variant={ "fullWidth" }/>
                    </Box>

                    <ThemeProvider theme={ theme }>
                        <Box
                            component={ 'form' }
                            display={ 'flex' }
                            flexDirection={ 'column' }
                            width={ '100%' }
                            paddingX={ 5 } gap={ 2 }
                            onSubmit={ ( e: FormEvent ) => e.preventDefault() }
                        >
                            <TextField
                                placeholder={ "John doe" }
                                value={ user.name }
                                label={ "Nome" }
                                fullWidth
                                InputProps={ startAdornment(FiUser) }
                            />

                            <TextField
                                placeholder={ "Due" }
                                value={ user.lastname }
                                label={ "Sobrenome" }
                                fullWidth
                                InputProps={ startAdornment(FiUser) }
                            />

                            <TextField
                                placeholder={ "Due" }
                                value={ user.email }
                                label={ "E-mail" }
                                fullWidth
                                InputProps={ startAdornment(FiMail) }
                            />

                            <TextField
                                placeholder={ "Sua#Senha@!Ultra!Secreta" }
                                label={ "Senha" }
                                type={ type }
                                fullWidth
                                InputProps={ {
                                    ...startAdornment(FiLock),
                                    ...passwordAdornment({
                                        isVisible,
                                        VisibleIcon: FiEyeOff,
                                        HiddenIcon: FiEye,
                                        onClick: toggleVisibility
                                    })
                                } }
                            />

                            <Button variant={ "contained" }>
                                Salvar
                            </Button>
                        </Box>
                    </ThemeProvider>
                </div>

                <div className={ classNames(styles.reportCards) }>
                    <div>
                        <Typography variant={ 'h5' }>Suas Conquistas</Typography>

                        <Divider/>

                        <Typography>
                            Em breve
                        </Typography>
                    </div>

                    <div>
                        <Typography variant={ 'h5' }>Suas Estatísticas</Typography>

                        <Divider/>

                        <Typography>
                            Em breve
                        </Typography>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

const startAdornment = ( Icon: IconType ): StandardTextFieldProps['InputProps'] => ({
    startAdornment: (
        <InputAdornment position={ 'start' }>
            <Icon size={ 24 }/>
        </InputAdornment>
    )
})

type PasswordArgs = {
    isVisible: boolean;
    VisibleIcon: IconType;
    HiddenIcon: IconType;
    onClick: () => void;
}
const passwordAdornment = (
    {
        isVisible,
        VisibleIcon,
        HiddenIcon,
        onClick
    }: PasswordArgs ): StandardTextFieldProps['InputProps'] => ({
    endAdornment: (
        <InputAdornment position={ 'end' }>
            <IconButton onClick={ onClick }>
                { isVisible
                    ? <VisibleIcon size={ 24 }/>
                    : <HiddenIcon size={ 24 }/>
                }
            </IconButton>
        </InputAdornment>
    )
})

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            ...purplePalette,
            main: (purplePalette as any)['300'],
        }
    }
})