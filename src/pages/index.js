import TemplateDefault from '@/templates/Default'
import { Button, Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
  return{
    container: {
      padding: '80px 0 197px',
      backgroundImage: 'url(/images/bgTop.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    promise: {
      margin: '80px 0 24px',
      width: '430px',
      fontSize: '38px',
      lineHeight: '48px',
      fontWeight: 'bold'
    },
    subPromise: {
      marginBottom: '40px',
      width: '430px',
      fontSize: '24px',
      lineHeight: '34px'
    },
    button: {
      height: '60px',
      width: '430px'
    }

  }
})

const Home = () => {
  const { classes } = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth={`100vw`} className={classes.container}>
        <Container maxWidth={'md'}>
          <img src='/images/logoHumanizar.png' />
          <Typography color={'secondary'} className={classes.promise}>
            Lorem ipsum dolor sit amet consectetur ipsum eget scelerisque quisque
          </Typography>
          <Typography className={classes.subPromise}>
            Lorem ipsum dolor sit amet consectetur. Condimentum lectus commodo tincidunt nec faucibus aliquam. Dis sagittis ut facilisi duis ac id neque. Facilisis id ed.
          </Typography>
          <Button variant='contained' size='large' color='secondary' className={classes.button}>
            Quero participar
          </Button>
        </Container>
      </Container>
    </TemplateDefault>
  )
}

export default Home