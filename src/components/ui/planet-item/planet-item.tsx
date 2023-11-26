import { Link } from 'react-router-dom';

import styles from './planet-item.module.scss'

interface IPeopleItem {
  name: string
}


const PlanetItem = ({planet}: IPeopleItem) => {

  return (
    <Link
        to={`/planets/${planet.id}`}
        className={styles.tile}
        style={{background: `url(${planet['previewImage']}) no-repeat top center / cover`}}>
          <div className={styles['tile__title-wrapper']}>
            <h3 className={styles['tile__name']}>{planet.name}</h3>
          </div>
      </Link>
  )
}

export default PlanetItem