import axios from "axios"

export const SWApiService = {
  async getAllCategories() {
    const response = await axios.get('http://localhost:3000/categories')

    return response.data
  },

  async getAllPeople() {
    const response = await axios.get('http://localhost:3000/characters')

    return response.data
  },

  async getAllStarShips() {
    const response = await axios.get('http://localhost:3000/starships')

    return response.data
  },

  async getStarshipById(id) {
    const response = await axios.get(`http://localhost:3000/starships/${id}`)

    return response.data
  },

  async getPersonById(id) {
    const response = await axios.get(`http://localhost:3000/characters/${id}`)

    return response.data
  },

  async getAllPlanets() {
    const response = await axios.get('http://localhost:3000/planets')

    return response.data
  },

  async getPlanetById(id) {
    const response = await axios.get(`http://localhost:3000/planets/${id}`)

    return response.data
  },

  



}