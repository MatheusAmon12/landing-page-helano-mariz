import TemplateDefault from '@/templates/Default'
import { Button, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
  return{
    containerPageOne: {
      padding: '80px 0 197px',
      backgroundImage: 'url(/images/bgTop.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    containerPageTwo: {
      padding: '197px 0',
      backgroundColor: theme.palette.background.default
    },
    promise: {
      margin: '80px 0 24px',
      width: '430px',
      fontSize: '38px',
      lineHeight: '48px',
      fontWeight: 'bold'
    },
    subPromise: {
      width: '430px',
      fontSize: '24px',
      lineHeight: '34px'
    },
    button: {
      marginTop: '80px',
      height: '60px',
      width: '430px'
    },
    textWidth: {
      width: '300px',
    },
    title: {
      width: '430px',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    subTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    grid: {
      display: 'flex',
      alignItems: 'center',
    },
    brainIcon: {
      width: '250px'
    }

  }
})

const Home = () => {
  const { classes } = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth={`100vw`} className={classes.containerPageOne}>
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

      <Container maxWidth={`100vw`} className={classes.containerPageTwo}>
        <Container maxWidth={'md'}>
          {
            //Grid do ícone Brain com todo conteúdo
          }
          <Grid container className={classes.grid}>
            <Grid item md='6' sm='12'>
              <img src='/images/brainIcon.png' className={classes.brainIcon}/>
            </Grid>

            <Grid item md='6' sm='12'>
              <Typography className={ classes.title }>
                Lorem ipsum dolor sit amet consectetur ipsum eget scelerisque
              </Typography>

              {
                //Grid do conjunto de ícones e textos
              }
              <Grid container>
                <Grid item>
                  {
                    //Grid do ícone e seu respectivo texto
                  }
                  <Grid container className={classes.grid}>
                    <Grid item md='6' sm='12'>
                      <img src='/images/iconConhece-te.png' />
                    </Grid>
                    
                    <Grid item md='6' sm='12'>
                      <Typography className={classes.subTitle}>
                        Lorem ipsum
                      </Typography>

                      <Typography className={classes.textWidth}>
                        Lorem ipsum dolor sit amet consectetur. Integer suspendisse libero aenean eu varius tortor vivamus. Risus sem egestas varius et nunc posuere.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container className={classes.grid}>
                    <Grid item md='6' sm='12'>
                      <img src='/images/iconAceita-te.png' />
                    </Grid>
                    
                    <Grid item md='6' sm='12'>
                      <Typography className={classes.subTitle}>
                        Lorem ipsum
                      </Typography>

                      <Typography className={classes.textWidth}>
                        Lorem ipsum dolor sit amet consectetur. Integer suspendisse libero aenean eu varius tortor vivamus. Risus sem egestas varius et nunc posuere.
                      </Typography>
                    </Grid>
                  </Grid> 
                </Grid>

                <Grid item>
                  <Grid container className={classes.grid}>
                    <Grid item md='6' sm='12'>
                      <img src='/images/iconTransforma-te.png' />
                    </Grid>
                    
                    <Grid item md='6' sm='12'>
                      <Typography className={classes.subTitle}>
                        Lorem ipsum
                      </Typography>

                      <Typography className={classes.textWidth}>
                        Lorem ipsum dolor sit amet consectetur. Integer suspendisse libero aenean eu varius tortor vivamus. Risus sem egestas varius et nunc posuere.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Button variant='contained' size='large' color='secondary' className={classes.button}>
                Quero participar
              </Button>

            </Grid>
          </Grid>
          
        </Container>
      </Container>
    </TemplateDefault>
  )
}

export default Home