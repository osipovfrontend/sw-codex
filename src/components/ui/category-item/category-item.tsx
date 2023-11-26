import { Link } from 'react-router-dom';
import styles from './category-item.module.scss'
import { ICategoryItem } from '../../interfaces';


const CategoryItem = ({imageSrc, title, pageId}: ICategoryItem) => {
  return (
    <Link to={`/${pageId}`}>
      <div className={styles.tile}>
        <h2 className={styles['tile__title']}>{title}</h2>
        <div className={styles['tile__content']} style={{background: `url(${imageSrc}) no-repeat top center / cover`}} />
      </div>
    </Link>
  )
}

export default CategoryItem