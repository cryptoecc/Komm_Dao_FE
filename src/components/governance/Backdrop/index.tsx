import { Container, Content } from './index.style'

const Backdrop = ({ children, close }: any) => {
    return (
        <Container onClick={() => close()}>
            <Content onClick={(e) => e.stopPropagation()}>
                {children}
            </Content>
        </Container>
    )
}

export default Backdrop