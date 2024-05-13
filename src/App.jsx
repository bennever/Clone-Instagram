import styled from 'styled-components'
import { Header } from './Components/Header';
import {Profile} from './Pages/Profile';
import {Footer} from './Components/Footer';
import GlobalStyles from './theme';

export const App = () =>{
  return(
<>

<Header/>
<Profile/>
<Footer/>

<GlobalStyles/>
</>
  )
} 