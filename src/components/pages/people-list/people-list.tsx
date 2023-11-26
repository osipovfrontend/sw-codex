import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { SWApiService } from '../../../services/swapi.service.js';
import PeopleItem from '../../ui/people-item/people-item.js';

import styles from './people-list.module.scss'

const PeopleList = () => {
  const [characters, setCharacters] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const data = await SWApiService.getAllPeople()
      setCharacters(data)
    }
    fetchData()
  }, [])

  if (characters.length === 0) return <p>Loading...</p>

  // const nav = useNavigate()



  return (
    <div>
      {/* <Link to='/'>ВЕРНУТЬСЯ НАЗАД</Link> */}

      <div className={styles['people-list']}>
        {characters && characters.length
         ? characters.map(character => (
            <PeopleItem key={character.id} character={character} />
          ))
         : <p>No data</p>}
    </div>


    </div>

  )
}

export default PeopleList
