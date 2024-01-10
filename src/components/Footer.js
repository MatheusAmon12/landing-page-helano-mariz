import { Container, Grid, IconButton, Typography, colors } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

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

    return(
        <Container maxWidth={`100vw`} disableGutters className={classes.footer}>
            <Grid container className={classes.container}>
                <Grid item>
                    <IconButton>
                        <WhatsApp color='tertiary'/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton>
                        <Instagram color='tertiary'/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton>
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