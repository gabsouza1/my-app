import { Container } from './styles'


export function Table() {
    return(
        <Container>
        <table>
            <thead>
                <tr>
                    <th>Nome do Evento</th>
                    <th>Local</th>
                    <th>Dia da Semana</th>
                    <th>Horário</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='title'>Rock In Rio</td>
                    <td className="place">Rio de Janeiro</td>
                    <td>Sexta-feira</td>
                    <td>22:00</td>
                </tr>
            </tbody>
        </table>
    </Container>
    )
}