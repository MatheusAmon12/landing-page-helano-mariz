const { Container } = require("@mui/material")

import Footer from "@/components/Footer"

const Default = ({children}) => {
    return(
        <>
            <Container maxWidth={`100vw`} disableGutters>
                {children}
            </Container>
            <Footer/>
        </>
    )
}

export default Default