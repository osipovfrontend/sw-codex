import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SWApiService } from '../../../services/swapi.service.js';

import styles from './planet-list.module.scss'
import PlanetItem from '../../ui/planet-item/planet-item.js';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SWApiService.getAllPlanets()
      setPlanets(data)
    }
    fetchData()
  }, [])

  if (planets.length === 0) return <p>Loading...</p>

  return (
    <div>
      {/* <Link to='/'>ВЕРНУТЬСЯ НАЗАД</Link> */}

      <div className={styles['people-list']}>
        {planets && planets.length
         ? planets.map(planet => (
            <PlanetItem key={planet.id} planet={planet} />
          ))
         : <p>No data</p>}
    </div>


    </div>

  )
}

export default PlanetList
