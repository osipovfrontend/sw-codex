import { useEffect, useState } from 'react'
import {SWApiService} from '../../../services/swapi.service.js'
import CategoryItem from '../../ui/category-item/category-item.js'

import styles from './category-list.module.scss'


interface ICategoryItem {
  imageSrc: string;
  title: string;
  pageId: string;
}

const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await SWApiService.getAllCategories()
      setCategories(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles['category-list']}>
    {
      categories.map((category:ICategoryItem) => {
        return <CategoryItem key={category.id} imageSrc={category.imageSrc} title={category.title} pageId={category.pageId}/>
      })
    }
    </div>
  )
}

export default CategoryList