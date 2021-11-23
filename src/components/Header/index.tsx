import img  from '../../assets/logo.svg'

import { Container, Content } from './styles'


export function Header() {
    return(
        <Container>
            <Content>
                <img src={img} alt='Rock in Rio'/>
                <button type="button">
                    Inserir atração
                </button>
            </Content>
        </Container>
    )
}