import styled from "styled-components";


export const Container = styled.main`
    max-width: 1120px;

    margin: 0 auto;
    margin-top: 25px;
    padding: 2.5rem 1rem;
`


export const Primary = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
`
export const Select = styled.select`
    width: 1000px;
    border-radius: 5px;
    padding: 20px;
    border: none;
    height: 25px;
    margin: 5px 0 5px 0; 
  
`


export const Product = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 1000px;
    border-color: lightgreen;
    margin-bottom: 10px;
    margin-top: 15px;
    button{
        margin-bottom: 5px;
        height: 50px;
        padding: 10px;
    }
    button:hover{
        background-color: rgba(199, 199, 199, 0.8);
        border: 1px green solid;
    }
    `


export const Grade = styled.div`
    padding: 15px;
    margin: 0 auto;
    button{
        height: 45px;
        width: 60px;
        margin: 2px;
        border-radius: 10px;
    }
    button:hover{
        background-color: rgba(199, 199, 199, 0.8);
        border: 1px green solid;
        
    }
`