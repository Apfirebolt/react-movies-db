import axios from 'axios'
import { toast } from 'react-toastify'
const API_URL = 'https://softgenie.org/api/movies'

// Get user movies
const getMovies = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (err) {
    let errorMessage = 'Something went wrong'
    if (err.response.status === 401) {
      errorMessage = 'Unauthorized access, please login again.'
    }
    toast.error(errorMessage)
  }
}

// Get single Movie
const getMovie = async (movieId) => {
  try {
    const response = await axios.get(API_URL +  '/' + movieId)
  
    return response.data
  } catch (err) {
    let errorMessage = 'Something went wrong'
    if (err.response.status === 401) {
      errorMessage = 'Unauthorized access, please login again.'
    }
    toast.error(errorMessage)
  }
}

const movieService = {
  getMovie,
  getMovies,
}

export default movieService