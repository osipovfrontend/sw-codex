import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from '../pages/main-page/main-page'
import PeopleList from '../pages/people-list/people-list'
import PlanetList from "../pages/planet-list/planet-list"
import PeopleDetails from "../pages/people-details/people-details"
import Header from "../header/header";

import styles from './App.module.scss'
import PlanetDetails from "../pages/planet-details/planet-details";
import NotFoundPage from "../pages/not-found-page/not-found-page";

function App() {
  return (
    <div className={styles['stardb-app']}>
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route path="/" element={<MainPage />} />
          <Route path='/characters' element={<PeopleList />} />
          <Route path='/planets' element={<PlanetList />} />
          <Route path='/characters/:id' element={<PeopleDetails />} />
          <Route path='/planets/:id' element={<PlanetDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
