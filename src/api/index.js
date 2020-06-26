import axios from 'axios'

const api = axios.create({
    baseURL: 'https://us-central1-save-2d3cf.cloudfunctions.net/api',
})

// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllOurWorks = () => api.get(`/our_works`)
export const getOurWorksByPage = 
(pageNum,numOfElements) => api.get(`/our_works/${numOfElements}/${pageNum}`)
export const getOurTeam = 
(pageNum,numOfElements) => api.get(`/our_team/${numOfElements}/${pageNum}`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
	getOurWorksByPage,
	getOurTeam,
    // insertMovie,
    // getAllOurWorks,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
}

export default apis