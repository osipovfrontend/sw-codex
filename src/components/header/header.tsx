import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {SWApiService} from '../../services/swapi.service.js'

import styles from './header.module.scss'
import { ICategoryItem } from '../interfaces.js'


const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SWApiService.getAllCategories()
      setCategories(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.header}>
      <NavLink to={`/`}>
        <img src="../../assets/app-logo.png" alt="LOGO" className={styles['app-logo']} />
      </NavLink>
      <nav>
        <ul className={styles['menu-list']}>
        {
          categories.map((category:ICategoryItem) => {
            return <NavLink
                    to={`${category.pageId}`}
                    key={category.id}
                    className={({ isActive }) => isActive ? ` ${styles['menu-list__item']} ${styles['menu-list__item_active']}` : `${styles['menu-list__item']}`}>
                      {category.title}
                    </NavLink>
          })
        }
        </ul>
      </nav>

    </div>

    
  )
}

export default Header