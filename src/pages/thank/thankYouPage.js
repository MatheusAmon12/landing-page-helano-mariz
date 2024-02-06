import { useRouter } from 'next/router'
import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '@/templates/Default'
import { Button, Container, Typography } from '@mui/material'

const useStyles = makeStyles()((theme) => {
    return{
      bgContainer: {
        backgroundImage: 'url(/images/thankYouPageBG.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      },
      box: {
        padding: '80px 0 180px'
      },
      title: {
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '16px',
        width: '430px',
      },
      name: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '40px',
        width: '430px',
        color: theme.palette.quaternary.main
      },
      text: {
        fontSize: '24px',
        marginBottom: '80px',
        width: '430px',
      },
    }
  })

const ThankYouPage = () => {
    const { classes } = useStyles()
    const router = useRouter()

    const { name } = router.query

    return(
        <TemplateDefault>
            <Container maxWidth={'100vw'} className={classes.bgContainer}>
                <Container maxWidth={'md'} className={classes.box}>
                    <Typography component='h1' className={classes.title} color={'#FFF'} >
                        OBRIGADO,
                    </Typography>
                    <Typography className={classes.name}>
                        { name }
                    </Typography>
                    <Typography className={classes.text} color={'#FFF'}>
                        Agora falta pouco para finalizar sua inscrição. Clique no botão abaixo para fazer parte do grupo exclusivo do WhatsApp.
                    </Typography>
                    <Button variant='contained' size='large' color={'quaternary'} style={{gap: '10px'}}>
                        <img src='/images/whatsAppIcon.png' />
                        <Typography style={{fontWeight: 'bolder'}} color={'#FFF'}> Participar do grupo</Typography>
                    </Button>
                </Container>
            </Container>
        </TemplateDefault>
    )
}

export default ThankYouPage