


import { NavLink } from 'react-router-dom'
import styles from './not-found-page.module.scss'

const NotFoundPage = () => {


  return (



    <div className={styles['not-found-page']}>

      


      <div className={styles['not-found-page__img']}>

        <span className={styles['not-found-page__number']}>4</span>


        {/* <img src="../../assets/404_death-star.png" alt="LOGO" className={styles['not-found-page__img']} /> */}
        <img src="../../assets/404_death-star.png" alt="LOGO"/>

        <span className={styles['not-found-page__number']}>4</span>

      </div>

      <div className={styles['not-found-page__notification']}>
          <p className={styles['not-found-page__notification-text']}>
            Упс.. Кажется данная страница больше не существует
          </p>
          <p>
            Вы можете вернуться на 
             <NavLink to={`/`} className={styles['link-home-page']}>
              главную
            </NavLink>
          </p>
          
      </div>
    </div>

    // <NavLink to={`/`}>
    //     <img src="../../assets/404_death-star.png" alt="LOGO" className={styles['app-logo']} />
    //   </NavLink>




    
  )
}

export default NotFoundPage