import img from '../../assets/logo.png'
import { Container, Content } from './styles'


export function Header() {
    return(
        <Container>
            <Content>
                <img src={img} alt="TOTVS"/>
            </Content>
        </Container>
    )
}