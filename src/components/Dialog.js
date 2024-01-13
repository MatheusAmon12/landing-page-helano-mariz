import { forwardRef } from 'react'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    Typography
} from '@mui/material'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const useStyles = makeStyles()((theme) => {
    return{
        dialogBox: {
            
        },
        dialogTitle: {
            fontSize: '24px',
            textAlign: 'center',
            lineHeight: '42px',
            color: 'black',
            padding: '80px 0 0'
        },
        dialogContentText: {
            fontSize: '32px',
            fontWeight: 'bolder',
            textAlign: 'center',
            color: 'black',
            lineHeight: '48px',
            padding: '0 160px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '24px',
                lineHeight: '34px',
                padding: '0 20px'
            }
        },
        dialogContentTextSub: {
            fontWeight: 'bold'
        },
        dialogActions: {
            padding: '0 0 120px'
        }


    }
})

const AlertDialogSlide = ({ open, onClose}) => {
  const handleClose = () => {
    onClose()
  }
  const handleRedirect = (url) => {
    onClose()
    router.push(url)
  }

  const { classes } = useStyles()
  const router = useRouter()

  return (
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    maxWidth='xl'
    >
        <Box className={classes.dialogBox}>
            <DialogTitle className={classes.dialogTitle}>Obrigado!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description" className={classes.dialogContentText}>
                    Agora falta pouco para finalizar sua inscrição. <br/>Clique no botão abaixo para fazer parte do grupo exclusivo do WhatsApp.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button 
                    variant='contained' 
                    size='large' 
                    color='secondary' 
                    style={{display: 'block', margin: '20px auto 0'}} 
                    className={classes.button} 
                    onClick={() => handleRedirect('https://chat.whatsapp.com/H5QegAtFQssGMgeh1eCS7R')}
                >
                          participar do grupo
                </Button>
            </DialogActions>
        </Box>
    </Dialog>
  )
}

export default AlertDialogSlide