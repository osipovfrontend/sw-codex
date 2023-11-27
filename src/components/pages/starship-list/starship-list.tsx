import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SWApiService } from '../../../services/swapi.service.js';

import styles from './starship-list.module.scss'
import StarshipItem from '../../ui/starship-item/starship-item.js';

const StarshipList = () => {
  const [starShips, setStarShips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SWApiService.getAllStarShips()
      setStarShips(data)
    }
    fetchData()
  }, [])

  if (starShips.length === 0) return <p>Loading...</p>

  return (
    <div>
      {/* <Link to='/'>ВЕРНУТЬСЯ НАЗАД</Link> */}

      <div className={styles['people-list']}>
        {starShips && starShips.length
         ? starShips.map(starShip => (
            <StarshipItem key={starShip.id} starShip={starShip} />
          ))
         : <p>No data</p>}
    </div>


    </div>

  )
}

export default StarshipList
