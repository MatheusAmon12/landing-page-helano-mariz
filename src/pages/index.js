import { useRef } from 'react'
import { useRouter } from 'next/router'
import { FormControl } from '@mui/base'
import { Box, Button, CircularProgress, Container, FormHelperText, Grid, Input, InputLabel, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import { Formik } from 'formik'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import TemplateDefault from '@/templates/Default'
import { initialValues, validationSchema } from '../utils/formValues'

const useStyles = makeStyles()((theme) => {
  return{
    containerTop: {
      height: '915px',
      padding: '80px 0',
      backgroundImage: 'url(/images/bgTop.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/bgTopSm.jpg)',
      }
    },
    promise: {
      margin: '40px 0 8px',
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
      fontWeight: 'normal',
      lineHeight: '34px',
      marginBottom: '80px',
      [theme.breakpoints.down('sm')]: {
        width: '350px',
        fontSize: '18px',
        lineHeight: '28px'
      }
    },
    button: {
      height: '60px',
      width: '350px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#EBE5E5',
      [theme.breakpoints.down('sm')]: {
        width: '320px',
      }
    },
    section_2: {
      backgroundImage: 'url(/images/bgDobra2.jpg)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: 'url(/images/bgDobra2Sm.jpg)',
        backgroundAttachment: 'scroll',
        paddingBottom: '320px',
      }
    },
    section_3: {
      backgroundColor: theme.palette.background.default
    },
    section_4: {
      backgroundImage: 'url(/images/bgDobra4.jpg)',
      backgroundSize: 'cover',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: '550px',
        backgroundImage: 'url(/images/bgDobra4Sm.jpg)'
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
    section_6: {
      backgroundColor: theme.palette.background.default,
    },
    orderedList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
      color: '#EBE5E5',
    },
    formBox: {
      maxWidth: '520px',
      minWidth: '350px',
      margin: '80px auto 0'
    },
    box: {
      background: 'rgb(5,117,230)',
      background: 'linear-gradient(90deg, rgba(5,117,230,1) 0%, rgba(2,27,121,1) 100%)',
      padding: '15px 25px',
      borderRadius: '7px',
    },
    common_padding: {
      padding: '159px 0'
    },
    common_width: {
      width: '430px',
      [theme.breakpoints.down('sm')]: {
        width: '350px'
      }
    },
    /* 
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
    */

  }
})

const Home = () => {
  const router = useRouter()
  const { classes } = useStyles()
  const formValues = {
    ...initialValues
  }
  //definindo a referência inicial como null
  const formRef = useRef(null)

    const handleFormSubmit = async (values, subscribe) => {

      //requisição para a api
      /*
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
      */
      try {
        //Enviando os dados para o GTM
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          'event': 'gtm.formSubmit',
          'formValues': values
        })

        const result = await subscribe(values)
        console.log(result)
      } catch (error) {
        console.error("Erro ao inscrever no MailChimp:", error)
      }

      router.push({
        pathname: '/thank/thankYouPage',
        query: {name: values.NAME}
      })
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
        //Topo
      }
      <Container maxWidth={`100vw`} className={classes.containerTop}>
        <Container maxWidth={'md'}>
          <img src='/images/logoHumanizar.png' />

          <Typography variant={'h1'} color={'#EBE5E5'} className={classes.promise}>
            Mulheres sábias, famílias restauradas. Descubra como transformar sua vida e restaurar seu lar, tornando-se uma mulher sábia.
          </Typography>

          <Typography variant={'h2'} color={'#EBE5E5'} className={classes.subPromise}>
            No dia 04 de março, às 20:00. No YouTube ao vivo e 100% gratuito.
          </Typography>

          <Button 
            variant='contained' 
            color='tertiary' 
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

      {
        /*
          (Jogar para a LP de vendas)
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
                    Irei te ajudar a superar os traumas e encontrar equilíbrio em seus relacionamentos
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
                            No primeiro módulo dessa imersão, você compreenderá o poder que está dentro de cada um de nós, através do amor de Deus. Aqui você irá entender e ressignificar sua história.
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
                            Por fim,  após identificar as áreas da sua vida que precisam ser mudadas,  vamos elaborar um plano de ação para que haja mudança de fato em sua vida . E assim você estará pronta para uma vida de equilíbrio e superação.
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
        */
      }

      {
        //Seção 2
      }

      <Container maxWidth={'100vw'} className={`${classes.section_2} ${classes.common_padding}`}>
        <Container maxWidth={'md'}>
          <Typography 
            variant={'h2'} 
            fontSize={'24px'} 
            lineHeight={'34px'} 
            className={`${classes.common_width} ${classes.margin_subtitle}`}
            color={'primary'}
            style={{margin: '0 auto 24px'}}
          >
            Já imaginou ter uma família onde as brigas são eventuais e alegria e o amor são cotidianos e frequentes?
          </Typography>

          <Typography 
            variant={'body1'} 
            lineHeight={'26px'} 
            className={classes.common_width}
            style={{margin: '0 auto'}}
          >
            Eu sei o quanto é difícil chegar em casa e se sentir ainda mais cansada, pois o lugar onde deveria ser de descanso parece um campo de guerra. São inúmeras tarefas para fazer, discussões exaustivas e repetitivas com os filhos e o marido. Mas imagine se existisse como ter uma família em que as conversas são regadas de risos e voltar para casa fosse tudo que você mais quisesse ao fim do dia?
          </Typography>
        </Container>
      </Container>

      {
        //Seção 3
      }

      <Container maxWidth={'100vw'} className={`${classes.section_3} ${classes.common_padding}`}>
        <Container maxWidth={'md'}>
          <Grid 
            container 
            alignItems={'center'} 
            justifyContent={'center'}
            rowGap={'16px'}
          >
            <Grid item md={6} sm={12}>
              <Typography
                variant={'h2'}
                fontSize={'24px'} 
                lineHeight={'26px'}
                color={'primary'} 
                style={{width: '350px'}}
              >
                <strong>ISSO É POSSÍVEL!</strong> Nesse evento eu irei te ensinar como ter uma família acolhedora e feliz em três passos. Sendo eles:
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <Grid 
                container 
                justifyContent={'center'} 
                rowGap={'24px'}
              >
                <Grid item md={12}>
                  <Box className={`${classes.box} ${classes.common_width}`}>
                    <Typography
                      variant={'body1'}
                      fontSize={'24px'}
                      lineHeight={'34px'}
                      color={'#EBE5E5'}
                    >
                      <span style={{fontWeight: 'bold'}}>O valor da mulher sábia:</span> como a sabedoria contribui para o fortalecimento da família.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={12}>
                  <Box className={`${classes.box} ${classes.common_width}`}>
                    <Typography
                      variant={'body1'}
                      fontSize={'24px'}
                      lineHeight={'34px'}
                      color={'#EBE5E5'}
                    >
                      <span style={{fontWeight: 'bold'}}>Trabalho e dedicação da mulher sábia:</span> cultive a ética de trabalhar e ser comprometida com os seu.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={12}>
                  <Box className={`${classes.box} ${classes.common_width}`}>
                    <Typography
                      variant={'body1'}
                      fontSize={'24px'}
                      lineHeight={'34px'}
                      color={'#EBE5E5'}
                    >
                      <span style={{fontWeight: 'bold'}}>Habilidade e generosidade da mulher sábia:</span> práticas para exercer a generosidade e o cuidado no seu lar.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={12}>
                  <Box className={`${classes.box} ${classes.common_width}`}>
                    <Typography
                      variant={'body1'}
                      fontSize={'24px'}
                      lineHeight={'34px'}
                      color={'#EBE5E5'}
                    >
                      <span style={{fontWeight: 'bold'}}>BÔNUS:</span> como ter a sabedoria de Deus para orientar suas vida e seu lar
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>

      {
        //Seção 4
      }

      <Container maxWidth={'100vw'} className={`${classes.section_4} ${classes.common_padding}`}>
        <Container maxWidth={'md'}>
          <Box>
            <Typography
              variant={'h2'}
              fontSize={'32px'}
              lineHeight={'42px'}
              className={classes.common_width}
              color={'#EBE5E5'}
              style={{marginBottom: '16px'}}
            >
              O que essa aula vai fazer por você?
            </Typography>
            <Typography
              variant={'body1'}
              fontSize={'24px'}
              lineHeight={'34px'}
              className={classes.common_width}
              color={'#EBE5E5'}
              style={{marginBottom: '40px'}}
            >
              Irá ajudá-las a terem um lar restaurado, onde a paz e a graça de Deus habita.
            </Typography>
          </Box>

          <Box>
            <Typography
              variant={'h2'}
              fontSize={'32px'}
              lineHeight={'42px'}
              className={classes.common_width}
              color={'#EBE5E5'}
              style={{marginBottom: '16px'}}
            >
              Como?
            </Typography>
            <Typography
              variant={'body1'}
              fontSize={'24px'}
              lineHeight={'34px'}
              className={classes.common_width}
              color={'#EBE5E5'}
              style={{marginBottom: '24px'}}
            >
              Por meio de direcionamentos simples iremos explicar sobre:
            </Typography>
          </Box>

          <ol className={`${classes.orderedList} ${classes.common_width}`}>
            <li>
              O valor da mulher sábia: Destacando a importância da sabedoria e da virtude na mulher. Falando sobre como a sabedoria contribui para o fortalecimento dos relacionamentos familiares.
            </li>

            <li>
              Trabalho e dedicação da mulher sábia: Analisando a diligência e a dedicação da mulher sábia em suas responsabilidades. Incentivando a audiência a cultivar uma ética de trabalho sólida e comprometida.
            </li>

            <li>
              Habilidade e generosidade da mulher sábia: Explorando as habilidades e a generosidade da mulher sábia em fornecer para sua família. Sugerindo maneiras práticas de exercer generosidade e cuidado com os seus.
            </li>
          </ol>

          <Box>
            <Typography
              variant={'h2'}
              fontSize={'32px'}
              lineHeight={'42px'}
              className={classes.common_width}
              color={'#EBE5E5'}
              style={{marginBottom: '16px'}}
            >
              BÔNUS
            </Typography>
            <Typography
              variant={'body1'}
              fontSize={'16px'}
              lineHeight={'26px'}
              className={classes.common_width}
              color={'#EBE5E5'}
              style={{marginBottom: '80px'}}
            >
              <span style={{fontWeight: 'bold'}}>Impacto duradouro da mulher sábia:</span> Conclua destacando o impacto duradouro que uma mulher sábia pode ter na restauração e fortalecimento das famílias. Incentive a audiência a buscar a sabedoria de Deus para orientar suas vidas e relacionamentos.
            </Typography>
          </Box>

          <Button 
            variant='contained' 
            color='tertiary' 
            className={classes.button}
            onClick={goToForm}
          >
            Quero participar
          </Button>
        </Container>
      </Container>

      {
        /*
          Preços (Jogar para a LP de vendas)
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
        */
      }
      
      {
        //Quarta página (sobre)
      }
      <Container maxWidth={`100vw`} className={`${classes.pageAbout} ${classes.common_padding}`}>
        <Container maxWidth={'md'}>
          <Typography
            variant={'h2'}  
            fontSize={'24px'}
            lineHeight={'42px'}
            className={classes.common_width}
            color={'#75DBCD'}
          >
            SOBRE
          </Typography>

          <Typography 
            variant={'h2'} 
            fontSize={'32px'}
            lineHeight={'42px'}
            className={classes.common_width}
            color={'#EBE5E5'}
            style={{marginBottom: '16px'}}
          >
            HELANO MARIZ
          </Typography>
          
          <Typography color={'#EBE5E5'} className={classes.common_width}>
            Na minha caminhada ministerial, mesmo sem compreender na época, no início dos anos 2002, quando minha esposa Renata Mariz enfrentou uma intensa depressão, percebi a importância do cuidado humano. <br/><br/>Desde então, passei a me dedicar ainda mais ao próximo, sendo reconhecido por muitos como um verdadeiro e fiel conselheiro. Ao longo dessa jornada, novos projetos e desafios foram sugeridos, tanto na área empreendedora quanto no cuidado humano. <br/><br/>Então me especializei em diversas áreas, sendo hoje: Analista comportamental, Especialista em sexologia e psicologia e Profissional em Coach. Tudo isso com o intuito de ajudar diferentes pessoas, em diferentes áreas de suas vidas.
          </Typography>
        </Container>
      </Container>

      {
        //Quinta página (formulário)
      }
      <Container maxWidth={`100vw`} className={`${classes.section_6} ${classes.common_padding}`}>
        <Container maxWidth={'md'} ref={formRef}>
          <Typography  
            textAlign={'center'} 
            variant={'h2'}
            fontSize={'32px'}
            lineHeight={'42px'}
            className={classes.common_width}
            color={'primary'}
            style={{margin: '0 auto 16px'}} 
          >
            Agora é hora de fazer a sua inscrição
          </Typography>

          <Typography
            variant={'body1'}
            fontSize={'16px'}
            lineHeight={'26px'}
            className={classes.common_width}
            textAlign={'center'} 
            style={{margin: '0 auto'}}
          >
            Informe seu melhor e-mail e WhatsApp para te avisarmos sobre a Live. <strong>No dia 04 de março, às 20:00. No YouTube ao vivo e 100% gratuito.</strong>
          </Typography>

          <Box className={classes.formBox}>
            <MailchimpSubscribe 
              url={'https://helanomariz.us21.list-manage.com/subscribe/post?u=df9722ee8d3116ef923edf0cf&amp;id=ac2f9ecb92&amp;f_id=000bede6f0'}
              render={({ subscribe, status, message}) => (

                <Formik
                  initialValues={formValues}
                  validationSchema={validationSchema}
                  onSubmit={( values, {setSubmiting} ) => {
                    handleFormSubmit(values, subscribe)
                    setSubmiting(false)
                  }}
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
                                name='NAME'
                                fullWidth
                                value={values.NAME}
                                onChange={handleChange}
                                color='secondary'
                              />

                              <FormHelperText error>
                                {errors.NAME && touched.NAME ? errors.NAME : null}
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
                                name='EMAIL'
                                fullWidth
                                value={values.EMAIL}
                                onChange={handleChange}
                                color='secondary'
                              />

                              <FormHelperText error>
                                {errors.EMAIL && touched.EMAIL ? errors.EMAIL : null}
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
                                name='PHONE'
                                fullWidth
                                value={values.PHONE}
                                onChange={handleChange}
                                color='secondary'
                              />

                              <FormHelperText error>
                                {errors.PHONE && touched.PHONE ? errors.PHONE : null}
                              </FormHelperText>
                            </FormControl>
                            <Button 
                              variant='contained' 
                              size='large' 
                              color='primary' 
                              style={{display: 'block', margin: '80px auto 0px'}} 
                              className={classes.button}
                              id='inscrever'
                              type='submit'
                            >
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

              )}
            
            />
          </Box>            
        </Container>
      </Container>
    </TemplateDefault>
  )
}

export default Home