import Header from '../../header/header'
import CategoryList from '../category-list/category-list'

import styles from './main-page.module.scss'

const MainPage = () => {

  return (
    <div className={styles['main-page']}>
      <CategoryList />
    </div>
  )
}

export default MainPage