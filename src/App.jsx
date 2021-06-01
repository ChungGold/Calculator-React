import { Device, Calculation, Grid, Buttons } from './components/Styles'

// const calculatorButtons = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '='];

// const createButtons = calculatorButtons => {
//   return (
//     <Buttons>{calculatorButtons}</Buttons> 
//   )
// }

export const App = () => {
  return (
    <Device>
      <Calculation />
      <Grid>
      </Grid>
    </Device>
  );
}


