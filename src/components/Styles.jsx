import styled from 'styled-components'

const Device = styled.main`
    width: 30%;
    height: 100%;

    border: 1px red solid;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: column wrap;
`

const Calculation = styled.section`
    width: 100%;
    height: 15%;

    border-radius: 25px;
    background-color: navy;
` 

const Grid = styled.section`
    width: 100%;
    height: 75%;
    background-color: navy;
    border-radius: 25px;

    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-template-rows: 17% 17% 17% 17% 17%;
`

const Buttons = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    background-color: white;

    box-shadow: 10px 5px 5px gray;
`

export { Device, Calculation, Grid, Buttons };
