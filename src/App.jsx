import { Device, Calculation, Grid } from './components/Styles'
import {calculatorButtons, createButtons} from './components/ButtonMaker'

export const App = () => {
  return (
    <Device>
      <Calculation id = 'calcDisplay'></Calculation>
      <Grid>
        {calculatorButtons.map(createButtons)}
      </Grid>
    </Device>
  );
}


