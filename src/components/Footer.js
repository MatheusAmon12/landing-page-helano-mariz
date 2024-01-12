import { Container, Grid, IconButton, Typography, colors } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'

import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'
import { MailOutlineOutlined } from '@mui/icons-material'

const useStyles = makeStyles()((theme) => {
    return{
        footer: {
            backgroundColor: theme.palette.secondary.main,
            padding: '197px 0',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
        },
    }
})

const Footer = () => {
    const { classes } = useStyles()
    const router = useRouter()

    const handleRedirect = (url) => {
        router.push(url)
    }

    return(
        <Container maxWidth={`100vw`} disableGutters className={classes.footer}>
            <Grid container className={classes.container}>
                <Grid item>
                    <IconButton>
                        <WhatsApp color='tertiary' onClick={() => handleRedirect('https://wa.me//5538?text=Olá,%20pode%20me%20ajudar?%20')}/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton>
                        <Instagram color='tertiary' onClick={() => handleRedirect('https://www.instagram.com/helanomariz/')}/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton onClick={() => handleRedirect('https://www.youtube.com/c/HelanoMariz')}>
                        <YouTube color='tertiary'/>
                    </IconButton>
                </Grid>
            </Grid>

            <Grid container className={classes.container}>
                <Grid item>
                    <MailOutlineOutlined color='tertiary'/>
                </Grid>

                <Grid item>
                    <Typography color={'white'}>
                        seuemail@email.com
                    </Typography>
                </Grid>
            </Grid>

            <Typography color={'white'} textAlign={'center'}>
                Informações | Suporte  
            </Typography>
        </Container>
    )
}

export default Footer