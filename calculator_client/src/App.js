/**
    * @description      : 
    * @author           : yaelm
    * @group            : 
    * @created          : 20/06/2021 - 18:46:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/06/2021
    * - Author          : yaelm
    * - Modification    : 
**/
import React from 'react'
import './App.css';
import { store } from './action/store'
import { Provider } from 'react-redux'
import Calculations from './componnents/calculation'
import { Container } from '@material-ui/core'

function App() {
  return (


    <Provider store={store}>
      <h1>Calculator</h1>
      <Container maxWidth="lg">
        <Calculations />
      </Container>
    </Provider>
  );
}

export default App;
