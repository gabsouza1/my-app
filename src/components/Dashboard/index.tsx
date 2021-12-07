import {Container, Product, Select, Grade } from './styles'


export function Dashboard() {
    return(
        <Container>
            <h1>1 . Perfil</h1>
            <p>Qual o seu <strong> cargo </strong> na empresa?</p>
            <Select>
                <option value="" disabled selected >Selecionar opção</option>
                <option value="Consultor"> Consultor </option>
                <option value="Suporte"> Suporte </option>
                <option value="Analista"> Analista </option>
                <option value="Estagiário"> Estagiário </option>
                <option value="Diretor"> Diretor </option>
                <option value="Administração"> Administração </option>
                <option value="Gerente">  Gerente </option>
            </Select>

            <p> Qual <strong> area ou departamento </strong> você atua? </p>
            <Select>
                <option value="" disabled selected >Selecionar opção</option>
                <option value="TI" > TI </option>
                <option value="Atendimento" > Atendimento ao Cliente </option>
                <option value="Administrativo" > Administrativo </option>
                <option value="Direção" > Direção </option>
                <option value="Vendas" > Vendas </option>
            </Select>
            <h1>2 . Produto</h1>
            <p>Por favor, informe qual dos produtos abaixo que você possui dentro da linha TOTVS</p>
            <Product> 
                <button>RH Protheus</button>
                <button>RH RM</button>
                <button>RH Datasul</button>
                <button>Nenhuma das opções</button>
            </Product>


            <h1>3 . AVALIAÇÃO DAS CARACTERISTICAS DAS SOLUÇÕES DE RH</h1>
            <p>Em uma escala de 1 a 7, <strong> onde 1 é não reconheço e 7 reconheço totalmente</strong>, avalie o quanto 
            você reconhece a presença das caracteristicas mencionadas abaixo  nas soluções de RH da TOTVS</p>
            <p> Inovação: </p>
            <Grade> 
                <button> 1 </button>
                <button> 2 </button>
                <button> 3 </button>
                <button> 4 </button>
                <button> 5 </button>
                <button> 6 </button>
                <button> 7 </button>
            </Grade>
            <p> Lesgislações (Cumprimento adequado): </p>
            <Grade> 
                <button> 1 </button>
                <button> 2 </button>
                <button> 3 </button>
                <button> 4 </button>
                <button> 5 </button>
                <button> 6 </button>
                <button> 7 </button>
            </Grade>
            <p> Qualidade (Confiabilidade): </p>
            <Grade> 
                <button> 1 </button>
                <button> 2 </button>
                <button> 3 </button>
                <button> 4 </button>
                <button> 5 </button>
                <button> 6 </button>
                <button> 7 </button>
            </Grade>
        </Container>
    )
}