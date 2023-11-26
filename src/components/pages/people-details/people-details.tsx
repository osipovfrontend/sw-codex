import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SWApiService } from '../../../services/swapi.service.js'

import styles from './people-details.module.scss'

const PeopleDetails = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
      if (!id) return
  
      const fetchData = async () => {
        const data = await SWApiService.getPersonById(id)
        setCharacter(data)
      }
      fetchData()
    }, [id]);


    if (!character) return <p>Loading...</p>

    return (
      <>
        {/* <Link to='/characters'>Back</Link> */}
        <div className={styles['item-card']}>
          <img src={character.logoSide} alt={character.titleSide} className={styles['item-card__logo-side']} />
          <div className={styles['item-card__head']}>
            <h1 className={styles['item-card__name']}>
              <span className="bold">{character.name}</span>
              &nbsp;{character.lastName}
            </h1>
            <h2 className={styles['item-card__level']}>{character.status}</h2>
            <div className={styles['item-card__color']} style={{'backgroundColor': `${character.color}`}}></div>
          </div>
          <p className={styles['item-card__description']}>
            {character.description}
          </p>
          <div className={styles['item-card__info']}>
            <h3 className={styles['item-card__title-info']}>Информация</h3>
            <div className={styles['item-card__props']}>
              <ul className={styles['item-card__props-list']}>
                <li className={styles['item-card__props-list-item']}>
                  Родной мир: <span className="bold">{character.homeworld}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Дата рождения: <span className="bold">{character.born}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Дата смерти: <span className="bold">{character.died}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Расса: <span className="bold">{character.species}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Пол: <span className="bold">{character.gender}</span>
                </li>
              </ul>
              <ul className={styles['item-card__props-list']}>
                <li className={styles['item-card__props-list-item']}>
                  Рост: <span className="bold">{character.height}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Вес: <span className="bold">{character.mass}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Цвет волос: <span className="bold">{character.hairColor}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Цвет  глаз: <span className="bold">{character.eyeColor}</span>
                </li>
                <li className={styles['item-card__props-list-item']}>
                  Импланты: <span className="bold">{character.cybernetics}</span>
                </li>
              </ul>
            </div>
          </div>
          <img src={character.fullImage} alt="Darth Vader" className={styles['character-photo']} />
        </div>
        {/* <span className={styles['character-name']}>{character.name} {character.lastName}</span> */}
        
      </>
    )
}

export default PeopleDetails