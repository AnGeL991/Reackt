import React from 'react';
//import styles from './App.scss';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
//import { AnimatedSwitch } from 'react-router-transition';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      {/* <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      > */Switch}
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
      <Route exact path='/faq' component={FAQ}/>
      {Switch/* </AnimatedSwitch> */}
    </MainLayout>
  </BrowserRouter>
);

export default App;