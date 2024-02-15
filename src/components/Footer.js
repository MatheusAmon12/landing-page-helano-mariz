import { Container, Grid, IconButton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'

import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'
import { MailOutlineOutlined } from '@mui/icons-material'
import Link from 'next/link'

const useStyles = makeStyles()((theme) => {
    return{
        footer: {
            backgroundColor: theme.palette.primary.main,
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
                    <IconButton onClick={() => handleRedirect('https://wa.me//5538?text=Olá,%20pode%20me%20ajudar?%20')}>
                        <WhatsApp color='tertiary' />
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton  onClick={() => handleRedirect('https://www.instagram.com/helanomariz/')}>
                        <Instagram color='tertiary'/>
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
                    <Typography color={'#75DBCD'}>
                        suporte@imersaohelanomariz.com
                    </Typography>
                </Grid>
            </Grid>

            <Typography color={'#75DBCD'} textAlign={'center'}>
                <Link 
                    passHref 
                    href={'mailto:suporte@imersaohelanomariz.com?subjet=Quero mais informações'} 
                    style={{
                        paddingRight: '5px', 
                        textDecoration: 'none', 
                        color: '#75DBCD'
                    }}
                    target='_blank'
                >
                    Informações   
                </Link>
                | 
                <Link 
                    passHref href={'mailto:suporte@imersaohelanomariz.com'} 
                    style={{
                        paddingLeft: '5px', 
                        textDecoration: 'none', 
                        color: '#75DBCD'
                    }}
                    target='_blank'
                >
                    Suporte
                </Link>
            </Typography>
        </Container>
    )
}

export default Footer