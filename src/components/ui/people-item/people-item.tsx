import { Link } from 'react-router-dom';

import styles from './people-item.module.scss'

interface IPeopleItem {
  name: string
}


const PeopleItem = ({character}: IPeopleItem) => {

  return (
    <Link
        to={`/characters/${character.id}`}
        className={styles.tile}
        style={{background: `url(${character['previewImage']}) no-repeat top center / cover`}}>
          <div className={styles['tile__title-wrapper']}>
            <h3 className={styles['tile__name']}>{character.name}</h3>
            <h3 className={styles['tile__last-name']}>{character.lastName}</h3>
          </div>
      </Link>
  )
}

export default PeopleItem