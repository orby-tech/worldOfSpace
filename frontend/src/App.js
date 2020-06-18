import  React from 'react';
import  './App.css';

import  NavBar  from './NavBar'
import  Footer   from './Footer'

import  Start   from './Start'
import  EarthSistem   from './earthSistem'
import  SolarSystem   from './solarSystem'
import  ConstructorStarSystem from './constructorOfStarSystem'
import  MoonPanoram from './moonPanoram'



import  { Route }       from 'react-router-dom';
import  { BrowserRouter } from 'react-router-dom';

import  { Provider } from 'react-redux'
import  {  createStore } from 'redux'
import  { rootReducer } from './redux/rootReducer'


const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore(rootReducer,
    persistedState)

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});
function App() {
  
  return (
    <div className="App">
        <Provider store={store}>
        <BrowserRouter>
          <Route path="/:id" exact component={NavBar}/>
          <Route path="/" exact component={Start} />
          <Route path="/earth" exact component={EarthSistem} />
          <Route path="/solar_system" exact component={SolarSystem} />
          <Route path="/constructor_Of_Star_System" exact component={ConstructorStarSystem} />
          <Route path="/moon_panoram" exact component={MoonPanoram} />
          <div className="alt__footer"></div>
        </BrowserRouter>
        </Provider>
    </div>
  );
}


export default App;