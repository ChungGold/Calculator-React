import { Buttons } from './Styles'
const calculatorButtons = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '='];

const createButtons = props => {
    return (
    <Buttons>{props}</Buttons> 
    )
}

export {calculatorButtons, createButtons};