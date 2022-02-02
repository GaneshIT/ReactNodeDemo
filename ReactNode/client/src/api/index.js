import axios from 'axios'
//wait a min
//node js server api url
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
//www.googlewhetherapi.com/location=Bangalore
// HTTPPOST:     http://localhost:3000/api/movie
// HTTPGET:     http://localhost:3000/api/movies
// HTTPDELETE:     http://localhost:3000/api/movie/123
export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
