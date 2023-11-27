import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from '../pages/main-page/main-page'
import PeopleList from '../pages/people-list/people-list'
import PlanetList from "../pages/planet-list/planet-list"
import PeopleDetails from "../pages/people-details/people-details"
import Header from "../header/header";

import styles from './App.module.scss'
import PlanetDetails from "../pages/planet-details/planet-details";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import StarshipDetails from "../pages/starship-details/starship-details";
import StarshipList from "../pages/starship-list/starship-list";

function App() {
  return (
    <div className={styles['stardb-app']}>
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route path="/" element={<MainPage />} />
          <Route path='/planets' element={<PlanetList />} />
          <Route path='/planets/:id' element={<PlanetDetails />} />
          <Route path='/characters' element={<PeopleList />} />
          <Route path='/characters/:id' element={<PeopleDetails />} />  
          <Route path='/starships' element={<StarshipList />} />
          <Route path='/starships/:id' element={<StarshipDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
