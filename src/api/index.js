import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000',
})

// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllOurWorks = () => api.get(`/our_works`)
export const getOurWorksByPage = (pageNum,numOfElements) => api.get(`/our_work/page/${pageNum}/${numOfElements}`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
// export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
	getOurWorksByPage,
    // insertMovie,
    // getAllOurWorks,
    // updateMovieById,
    // deleteMovieById,
    // getMovieById,
}

export default apis