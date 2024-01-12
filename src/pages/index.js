import { useState } from 'react'
import { FormControl } from '@mui/base'
import { Box, Button, Container, FormHelperText, Grid, Input, InputLabel, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { Formik } from 'formik'

import AlertDialogSlide from '@/components/Dialog'
import TemplateDefault from '@/templates/Default'
import { initialValues, validationSchema } from './formValues'

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
    },
    formBox: {
      maxWidth: '520px',
      minWidth: '350px',
      margin: '80px auto 0'
    }

  }
})

const Home = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const { classes } = useStyles()
  const formValues = {
    ...initialValues
  }
  
  const handleFormSubmit = (values) => {
    setOpenDialog(true)
    console.log('Deu certo aqui', values)
  }

  return (
    <TemplateDefault>
      {
        //Topo
      }
      <Container maxWidth={`100vw`} className={classes.containerTop}>
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

      {
        //Segunda página (módulos da imersão)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth={'md'}>
          {
            //Grid do ícone Brain com todo conteúdo
          }
          <Grid container className={classes.grid}>
            <Grid item md={6} sm={12}>
              <img src='/images/brainIcon.png' className={classes.brainIcon}/>
            </Grid>

            <Grid item md={6} sm={12}>
              <Typography  className={ classes.title }>
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
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconConhece-te.png' />
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Typography  className={classes.subTitle}>
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
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconAceita-te.png' />
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Typography  className={classes.subTitle}>
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
                    <Grid item md={6} sm={12}>
                      <img src='/images/iconTransforma-te.png' />
                    </Grid>
                    
                    <Grid item md={6} sm={12}>
                      <Typography  className={classes.subTitle}>
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

      {
        //Terceira página (preços)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth={'md'}>
          <Typography textAlign={'center'}  style={{margin: '0 auto 80px'}} className={classes.title}>
            Lorem ipsum dolor sit amet consectetur ipsum eget scelerisque
          </Typography>

          <Box className={classes.priceBox}>
            <Typography textAlign={'center'}>
              <s>de R$997,90</s>
            </Typography>

            <Typography textAlign={'center'} style={{fontSize: '24px'}}>
              por apenas
            </Typography>

            <Typography textAlign={'center'} style={{fontSize: '32px', fontWeight: 'bold'}}>
              12x de
            </Typography>

            <Typography textAlign={'center'} style={{fontSize: '88px', fontWeight: 'bold'}}>
              R$57,90
            </Typography>

            <Typography textAlign={'center'} style={{fontSize: '24px'}}>
              ou R$597,90 à vista
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
          <Typography  color={'#1C92D2'} className={classes.subTitle}>
            SOBRE
          </Typography>

          <Typography color={'#EBE5E5'} className={classes.title}>
            HELANO MARIZ
          </Typography>
          
          <Typography color={'#EBE5E5'} className={classes.textWidth}>
            Lorem ipsum dolor sit amet consectetur. Diam eget in sit elementum urna vitae viverra elit iaculis. Massa nunc laoreet dui fusce quis et in. Habitant porta libero ornare pellentesque non turpis eget viverra at. Integer a odio adipiscing faucibus id tincidunt eros vehicula.
            Lorem ipsum dolor sit amet consectetur. Diam eget in sit elementum urna vitae viverra elit iaculis. Massa nunc laoreet dui fusce quis et in. Habitant porta libero ornare pellentesque non turpis eget viverra at. Integer a odio adipiscing faucibus id tincidunt eros vehicula.
          </Typography>
        </Container>
      </Container>

      {
        //Quinta página (formulário)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth={'md'}>
          <Typography  textAlign={'center'} style={{margin: '0 auto'}} className={classes.title}>
            Agora é hora de fazer a sua inscrição
          </Typography>

          <Typography textAlign={'center'} style={{marginBottom: '80px 0'}}>
            Informe seu melhor e-mail para te avisarmos sobre as aulas
          </Typography>

          <Box className={classes.formBox}>
            <Formik
              initialValues={formValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {
                ({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                }) => {
                    return(
                      <form onSubmit={handleSubmit}>
                        <FormControl>
                          <InputLabel color='secondary'>
                            Nome
                          </InputLabel>

                          <Input
                            name='name'
                            fullWidth
                            value={values.name}
                            onChange={handleChange}
                            color='secondary'
                          />

                          <FormHelperText error>
                            {errors.name && touched.name ? errors.name : null}
                          </FormHelperText>
                        </FormControl>
                        <FormControl style={{margin: '40px 0px'}}>
                          <InputLabel>
                            E-mail
                          </InputLabel>

                          <Input
                            name='email'
                            fullWidth
                            value={values.email}
                            onChange={handleChange}
                            color='secondary'
                          />

                          <FormHelperText error>
                            {errors.email && touched.email ? errors.email : null}
                          </FormHelperText>
                        </FormControl>
                        <FormControl>
                          <InputLabel>
                            Celular
                          </InputLabel>

                          <Input
                            name='phone'
                            fullWidth
                            value={values.phone}
                            onChange={handleChange}
                            color='secondary'
                          />

                          <FormHelperText error>
                            {errors.phone && touched.phone ? errors.phone : null}
                          </FormHelperText>
                        </FormControl>
                        <Button variant='contained' size='large' color='secondary' style={{display: 'block', margin: '80px auto 0px'}} className={classes.button} type='submit'>
                          Inscrever
                        </Button>
                      </form>
                    )
                  }
              }
            
            </Formik>
          </Box>            
        </Container>
      </Container>

      {
        //Dialog box
      }
      <AlertDialogSlide 
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />

    </TemplateDefault>
  )
}

export default Home