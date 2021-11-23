import styled from "styled-components";


export  const  Container = styled.header`
    background: lightgreen;
    
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;


    padding: 1rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button{
        font-size: 1.2rem;
        background: var(--green);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.35rem;
        height: 2rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7);
        }

        img {

        }
    }
`
