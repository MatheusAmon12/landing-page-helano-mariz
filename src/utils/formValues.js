import * as yup from 'yup'

//definindo os valores iniciais dos inputs do formulário
const initialValues = {
    name: '',
    email: '',
    phone: '',
}

//definindo as validações dos inputs
const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Campo obrigatório!'),
    email: yup.string()
        .email('Digite um email válido!')
        .required('Campo obrigatório!'),
    phone: yup.number()
        .required('Campo obrigatório!'),
})

export {
    initialValues,
    validationSchema,
}