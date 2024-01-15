import { useState, useRef } from 'react'
import { FormControl } from '@mui/base'
import { Box, Button, CircularProgress, Container, FormHelperText, Grid, Input, InputLabel, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { Formik } from 'formik'

import AlertDialogSlide from '@/components/Dialog'
import TemplateDefault from '@/templates/Default'
import { initialValues, validationSchema } from './formValues'

import Pixel from '@/components/Pixel'

const useStyles = makeStyles()((theme) => {
  return{
    containerTop: {
      padding: '80px 0 197px',
      backgroundImage: 'url(/images/bgTop.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/bgTopSm.png)',
        backgroundPosition: 'center center',
        paddingBottom: '400px'
      }
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
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: { 
        width: '350px',
        fontSize: '30px',
        lineHeight: '40px',
      }
    },
    subPromise: {
      width: '430px',
      fontSize: '24px',
      lineHeight: '34px',
      [theme.breakpoints.down('sm')]: {
        width: '350px',
        fontSize: '18px',
        lineHeight: '28px'
      }
    },
    button: {
      marginTop: '80px',
      height: '60px',
      width: '430px',
      [theme.breakpoints.down('sm')]: {
        width: '320px',
      }
    },
    textWidth: {
      width: '430px',
      lineHeight: '26px',
      [theme.breakpoints.down('sm')]: {
        width: '350px'
      }
    },
    title: {
      width: '430px',
      fontSize: '24px',
      lineHeight: '34px',
      fontWeight: 'bold',
      marginBottom: '40px',
      [theme.breakpoints.down('sm')]: {
        width: '350px',
        fontSize: '22px'
      }
    },
    subTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    grid: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      }
    },
    brainIcon: {
      width: '250px'
    },
    priceBox: {
      borderRadius: '5px',
      border: '2px solid black',
      padding: '80px 0',
      width: '520px',
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        width: '350px',
      }
    },
    pageAbout: {
      backgroundImage: 'url(/images/bgAbout.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/bgAboutSm.png)',
        backgroundPosition: 'center center',
        paddingBottom: '600px'
      }
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
  //definindo a referência inicial como null
  const formRef = useRef(null)

  const handleFormSubmit = async (values) => {

    //requisição para a api
    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        phone: values.phone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json()
    console.log(error)

    setOpenDialog(true)

    console.log('Aqui funcionou ok!')
  }

  //scroll para a referência definida
  const goToForm = () => {
    window.scrollTo({
      top: formRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <TemplateDefault>
      {
        //Pixel do Facebook
      }
      <div>
        <Pixel name='FACEBOOK_PIXEL_1' />
      </div>

      {
        //Topo
      }
      <Container maxWidth={`100vw`} className={classes.containerTop}>
        <Container maxWidth={'md'}>
          <img src='/images/logoHumanizar.png' />

          <Typography color={'#2F54BF'} className={classes.promise}>
            Valorizando a essência
          </Typography>

          <Typography className={classes.subPromise}>
            Evite a autocondenação, busque a transformação. Em um mundo onde constantemente nos comparamos e nos autodepreciamos, aprenda como olhar para dentro de si e apreciar a riqueza que o Senhor lhe entregou
          </Typography>

          <Button 
            variant='contained' 
            size='large' 
            color='secondary' 
            className={classes.button}
            onClick={goToForm}
          >
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
          <Grid container rowSpacing={'160'} className={classes.grid}>
            <Grid item md={6} sm={12}>
              <img src='/images/brainIcon.png' className={classes.brainIcon}/>
            </Grid>

            <Grid item md={6} sm={12}>
              <Typography  className={ classes.title }>
                Irei te ajudar a se resolver com o seu passado e prosseguir para um futuro lindo
              </Typography>

              {
                //Grid do conjunto de ícones e textos
              }
              <Grid container rowSpacing={'32'}>
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
                        Conhece-te
                      </Typography>

                      <Typography className={classes.textWidth}>
                        No primeiro módulo dessa imersão, iremos trabalhar o poder que há dentro de cada um de nós através do amor de Deus. Aqui iremos entender e ressignificar a sua história juntos.
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
                        Aceita-te
                      </Typography>

                      <Typography className={classes.textWidth}>
                        Nesse segundo módulo vamos identificar o que tem te impedido de se relacionar melhor com as pessoas a sua volta e o que tem te travado em realizar seu sonhos.
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
                        Supera-te
                      </Typography>

                      <Typography className={classes.textWidth}>
                        Por fim iremos, após identificar que áreas da sua vida precisam ser mudadas, vamos elaborar um plano de ação para que haja mudança de fato em sua vida. E assim você estará pronta para um novo começo.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Button 
                variant='contained' 
                size='large' 
                color='secondary' 
                className={classes.button}
                onClick={goToForm}
              >
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
            Tenha uma mudança de pensamento e viva o seu propósito com Deus
          </Typography>

          <Box className={classes.priceBox}>
            <Typography 
              textAlign={'center'} 
            >
              <s>de R$997,90</s>
            </Typography>

            <Typography 
              textAlign={'center'} 
              style={{
                fontSize: '24px',
              }}
            >
              por apenas
            </Typography>

            <Typography 
              textAlign={'center'} 
              style={{
                fontSize: '32px', 
                fontWeight: 'bold',
              }}
            >
              12x de
            </Typography>

            <Typography 
              textAlign={'center'} 
              style={{
                fontSize: '88px', 
                fontWeight: 'bold',
              }}
            >
              R$57,90
            </Typography>

            <Typography 
              textAlign={'center'} 
              style={{
                fontSize: '24px',
              }}
            >
              ou R$597,90 à vista
            </Typography>

            <Button 
              variant='contained' 
              size='large' 
              color='secondary' 
              style={{display: 'block', margin: '80px auto 0px'}} 
              className={classes.button}
              onClick={goToForm}
            >
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
            Na minha caminhada ministerial, mesmo sem compreender na época, no início dos anos 2002, quando minha esposa Renata Mariz enfrentou uma intensa depressão, percebi a importância do cuidado humano. <br/><br/>Desde então, passei a me dedicar ainda mais ao próximo, sendo reconhecido por muitos como um verdadeiro e fiel conselheiro. Ao longo dessa jornada, novos projetos e desafios foram sugeridos, tanto na área empreendedora quanto no cuidado humano. <br/><br/>Então me especializei em diversas áreas, sendo hoje: Analista comportamental, Especialista em sexologia e psicologia e Profissional em Coach. Tudo isso com o intuito de ajudar diferentes pessoas, em diferentes áreas de suas vidas.
          </Typography>
        </Container>
      </Container>

      {
        //Quinta página (formulário)
      }
      <Container maxWidth={`100vw`} className={classes.containerPages}>
        <Container maxWidth={'md'} ref={formRef}>
          <Typography  textAlign={'center'} style={{margin: '0 auto'}} className={classes.title}>
            Agora é hora de fazer a sua inscrição
          </Typography>

          <Typography textAlign={'center'} style={{marginBottom: '80px 0'}}>
            Informe seu melhor e-mail e WhatsApp para te avisarmos sobre as aulas
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
                  isSubmitting,
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

                          <FormHelperText>
                            example@email.com
                          </FormHelperText>

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

                          <FormHelperText>
                            Digite apenas números, incluindo o DDD
                          </FormHelperText>

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
                          {
                            isSubmitting ? 
                              <CircularProgress color={'secondary'} /> :
                              'inscrever'
                          }
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