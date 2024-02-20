import * as yup from 'yup'

//definindo os valores iniciais dos inputs do formulário
const initialValues = {
    NAME: '',
    EMAIL: '',
    PHONE: '',
}

//definindo as validações dos inputs
const validationSchema = yup.object().shape({
    NAME: yup.string()
        .required('Campo obrigatório!'),
    EMAIL: yup.string()
        .email('Digite um email válido!')
        .required('Campo obrigatório!'),
    PHONE: yup.number()
        .required('Campo obrigatório!'),
})

export {
    initialValues,
    validationSchema,
}