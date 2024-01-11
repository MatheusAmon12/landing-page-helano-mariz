import TemplateDefault from '@/templates/Default'
import { FormControl } from '@mui/base'
import { Box, Button, Container, Grid, Input, InputLabel, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
  return{
    containerTop: {
      padding: '80px 0 197px',
      backgroundImage: 'url(/images/bgTop.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    containerPages: {
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
      width: '430px',
      lineHeight: '26px'
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
    },
    priceBox: {
      borderRadius: '5px',
      border: '2px solid black',
      padding: '80px 0',
      width: '520px',
      margin: '0 auto'
    },
    pageAbout: {
      backgroundImage: 'url(/images/bgAbout.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'left center'
    }

  }
})

const Home = () => {
  const { classes } = useStyles()

  return (
    <TemplateDefault>
      {
        //Topo
      }
      <Container maxWidth={`100vw`} className={classes.containerTop}>
        <Container maxWidth={'md'}>
          <img src='/images/logoHumanizar.png' />

          <Typography component={'h1'} color={'secondary'} className={classes.promise}>
            Lorem ipsum dolor sit amet consectetur ipsum eget scelerisque quisque
          </Typography>

          <Typography component={'h2'} className={classes.subPromise}>
            Lorem ipsum dolor sit amet consectetur. Condimentum lectus commodo tincidunt nec faucibus aliquam. Dis sagittis ut facilisi duis ac id neque. Facilisis id ed.
          </Typography>

          <Button variant='contained' size='large' color='secondary' className={classes.button}>
            Quero participar
          </Button>

        </Container>
      </Container>

      {
        //Segunda página (módulos da imersão)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth={'md'}>
          {
            //Grid do ícone Brain com todo conteúdo
          }
          <Grid container className={classes.grid}>
            <Grid item md='6' sm='12'>
              <img src='/images/brainIcon.png' className={classes.brainIcon}/>
            </Grid>

            <Grid item md='6' sm='12'>
              <Typography component={'h3'} className={ classes.title }>
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
                      <Typography component={'h3'} className={classes.subTitle}>
                        Lorem ipsum
                      </Typography>

                      <Typography component={'p'} className={classes.textWidth}>
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
                      <Typography component={'h3'} className={classes.subTitle}>
                        Lorem ipsum
                      </Typography>

                      <Typography component={'p'} className={classes.textWidth}>
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
                      <Typography component={'h3'} className={classes.subTitle}>
                        Lorem ipsum
                      </Typography>

                      <Typography component={'p'} className={classes.textWidth}>
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

      {
        //Terceira página (preços)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth='md'>
          <Typography textAlign={'center'}  style={{margin: '0 auto 80px'}} className={classes.title}>
            Lorem ipsum dolor sit amet consectetur ipsum eget scelerisque
          </Typography>

          <Box className={classes.priceBox}>
            <Typography textAlign={'center'}>
              <Typography component={'p'}>
                <s>de R$997,90</s>
              </Typography>

              <Typography component={'p'} style={{fontSize: '24px'}}>
                por apenas
              </Typography>

              <Typography component={'p'} style={{fontSize: '32px', fontWeight: 'bold'}}>
                12x de
              </Typography>

              <Typography component={'p'} style={{fontSize: '88px', fontWeight: 'bold'}}>
                R$57,90
              </Typography>

              <Typography component={'p'} style={{fontSize: '24px'}}>
                ou R$597,90 à vista
              </Typography>
            </Typography>

            <Button variant='contained' size='large' color='secondary' style={{display: 'block', margin: '80px auto 0px'}} className={classes.button}>
              Quero participar
            </Button>
          </Box>
        </Container>
      </Container>
      
      {
        //Quarta página (sobre)
      }
      <Container maxWidth={`100vw`} className={`${classes.pageAbout} ${classes.containerPages}`}>
        <Container maxWidth={'md'}>
          <Typography component={'h3'} color={'#1C92D2'} className={classes.subTitle}>
            SOBRE
          </Typography>

          <Typography component={'h2'} color={'#EBE5E5'} className={classes.title}>
            HELANO MARIZ
          </Typography>
          
          <Typography component={'p'} color={'#EBE5E5'} className={classes.textWidth}>
            Lorem ipsum dolor sit amet consectetur. Diam eget in sit elementum urna vitae viverra elit iaculis. Massa nunc laoreet dui fusce quis et in. Habitant porta libero ornare pellentesque non turpis eget viverra at. Integer a odio adipiscing faucibus id tincidunt eros vehicula.
            Lorem ipsum dolor sit amet consectetur. Diam eget in sit elementum urna vitae viverra elit iaculis. Massa nunc laoreet dui fusce quis et in. Habitant porta libero ornare pellentesque non turpis eget viverra at. Integer a odio adipiscing faucibus id tincidunt eros vehicula.
          </Typography>
        </Container>
      </Container>

      {
        //Quinta página (formulário)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth='md'>
          <Typography component={'h3'} textAlign={'center'} style={{margin: '0 auto'}} className={classes.title}>
            Agora é hora de fazer a sua inscrição
          </Typography>

          <Typography component={'p'} textAlign={'center'} style={{marginBottom: '40px 0'}}>
            Informe seu melhor e-mail para te avisarmos sobre as aulas
          </Typography>

          <Container maxWidth={'sm'}>
            <form>
              <FormControl>

                <InputLabel>
                  Nome
                </InputLabel>

                <Input
                  name='name'
                  variant=''
                  fullWidth
                  autoComplete
                />
              </FormControl>

              <FormControl style={{margin: '40px 0px'}}>

                <InputLabel>
                  E-mail
                </InputLabel>

                <Input
                  name='name'
                  outlined
                  fullWidth
                  autoComplete
                />

              </FormControl>

              <FormControl>

                <InputLabel>
                  Celular
                </InputLabel>

                <Input
                  name='name'
                  outlined
                  fullWidth
                  autoComplete
                />

              </FormControl>
            </form>
          </Container>
        </Container>
      </Container>

    </TemplateDefault>
  )
}

export default Home