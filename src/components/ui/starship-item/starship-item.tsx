import { Link } from 'react-router-dom';

import styles from './starship-item.module.scss'

interface IStarshipItem {
  name: string
}


const StarshipItem = ({starShip}: IStarshipItem) => {

  return (
    <Link
        to={`/starships/${starShip.id}`}
        className={styles.tile}
        style={{background: `url(${starShip['previewImage']}) no-repeat top center / cover`}}>
          <div className={styles['tile__title-wrapper']}>
            <h3 className={styles['tile__name']}>{starShip.name}</h3>
          </div>
      </Link>
  )
}

export default StarshipItem