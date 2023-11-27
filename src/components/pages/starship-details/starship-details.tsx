import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SWApiService } from '../../../services/swapi.service.js'

import styles from './starship-details.module.scss'

const StarshipDetails = () => {

    const { id } = useParams();
    const [starShip, setStarShip] = useState({})

    useEffect(() => {
      if (!id) return
  
      const fetchData = async () => {
        const data = await SWApiService.getStarShipById(id)
        setStarShip(data)
      }
      fetchData()
    }, [id]);


    if (!starShip) return <p>Loading...</p>

    return (
      <>
        {/* <Link to='/planets'>Back</Link> */}
        <div className={styles['item-card']}>
          <div className={styles['item-card__head']}>
            <h1 className={styles['item-card__name']}>
              <span className="bold">{starShip.name}</span>
            </h1>
            <div className={styles['item-card__color']} style={{'backgroundColor': `${starShip.color}`}}></div>
          </div>
          <p className={styles['item-card__description']}>
            {starShip.description}
          </p>
          <div className={styles['item-card__info']}>
            <h3 className={styles['item-card__title-info']}>Информация</h3>
            <div className={styles['item-card__props']}>
              <ul className={styles['item-card__props-list']}>
                <li className={styles['item-card__props-list-item']}>
                  Название: <span className="bold">{starShip.name}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Цикл вращения: <span className="bold">{starShip.rotationPeriod}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Диаметр: <span className="bold">{starShip.diameter}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Климат: <span className="bold">{starShip.climate}</span>
                </li>
              </ul>
              <ul className={styles['item-card__props-list']}>
                <li className={styles['item-card__props-list-item']}>
                  Поверхность: <span className="bold">{starShip.terrain}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Влажность: <span className="bold">{starShip.surfaceWater}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Популяция: <span className="bold">{starShip.population}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Гравитация: <span className="bold">{starShip.gravity}</span>
                </li>
              </ul>
            </div>
          </div>
          <img src={starShip.fullImage} alt={`${starShip.name}`} className={styles['character-photo']} />
        </div>
        {/* <span className={styles['character-name']}>{character.name} {character.lastName}</span> */}
        
      </>
    )
}

export default StarshipDetails