import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SWApiService } from '../../../services/swapi.service.js'

import styles from './planet-details.module.scss'

const PlanetDetails = () => {

    const { id } = useParams();
    const [planet, setPlanet] = useState({})

    useEffect(() => {
      if (!id) return
  
      const fetchData = async () => {
        const data = await SWApiService.getPlanetById(id)
        setPlanet(data)
      }
      fetchData()
    }, [id]);


    if (!planet) return <p>Loading...</p>

    return (
      <>
        {/* <Link to='/planets'>Back</Link> */}
        <div className={styles['item-card']}>
          <div className={styles['item-card__head']}>
            <h1 className={styles['item-card__name']}>
              <span className="bold">{planet.name}</span>
            </h1>
            <div className={styles['item-card__color']} style={{'backgroundColor': `${planet.color}`}}></div>
          </div>
          <p className={styles['item-card__description']}>
            {planet.description}
          </p>
          <div className={styles['item-card__info']}>
            <h3 className={styles['item-card__title-info']}>Информация</h3>
            <div className={styles['item-card__props']}>
              <ul className={styles['item-card__props-list']}>
                <li className={styles['item-card__props-list-item']}>
                  Название: <span className="bold">{planet.name}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Цикл вращения: <span className="bold">{planet.rotationPeriod}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Диаметр: <span className="bold">{planet.diameter}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Климат: <span className="bold">{planet.climate}</span>
                </li>
              </ul>
              <ul className={styles['item-card__props-list']}>
                <li className={styles['item-card__props-list-item']}>
                  Поверхность: <span className="bold">{planet.terrain}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Влажность: <span className="bold">{planet.surfaceWater}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Популяция: <span className="bold">{planet.population}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Гравитация: <span className="bold">{planet.gravity}</span>
                </li>
              </ul>
            </div>
          </div>
          <img src={planet.fullImage} alt={`${planet.name}`} className={styles['character-photo']} />
        </div>
        {/* <span className={styles['character-name']}>{character.name} {character.lastName}</span> */}
        
      </>
    )
}

export default PlanetDetails