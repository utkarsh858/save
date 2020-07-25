import axios from 'axios'

const api = axios.create({
    baseURL: 'https://us-central1-save-2d3cf.cloudfunctions.net/api',
})

export const submitQueryForm = 
(data) => api.post('/query',data)
export const getOurWorksByPage = 
(pageNum,numOfElements) => api.get(`/our_works/${numOfElements}/${pageNum}`)
export const getNumOfWorks = 
(pageNum,numOfElements) => api.get(`/our_works_num`)
export const getNumOfNews = 
(pageNum,numOfElements) => api.get(`/news_num`)
export const getOurTeam = 
(pageNum,numOfElements) => api.get(`/our_team/${numOfElements}/${pageNum}`)
export const getAppreciations = 
(pageNum,numOfElements) => api.get(`/quotes/${numOfElements}/${pageNum}`)
export const getAppreciationLetters = 
(pageNum,numOfElements) => api.get(`/letters/${numOfElements}/${pageNum}`)
export const getTestimonials = 
(pageNum,numOfElements) => api.get(`/testimonials/${numOfElements}/${pageNum}`)
export const getCaseStudies = 
(pageNum,numOfElements) => api.get(`/case_studies/${numOfElements}/${pageNum}`)
export const getNews = 
(pageNum,numOfElements) => api.get(`/news/${numOfElements}/${pageNum}`)
export const getGalleryImages = 
(pageNum,numOfElements) => api.get(`/gallery_images/${numOfElements}/${pageNum}`)

const apis = {
	submitQueryForm,
	getOurWorksByPage,
	getOurTeam,
	getAppreciations,
	getTestimonials,
	getCaseStudies,
	getNews,
	getGalleryImages,
	getNumOfWorks,
	getNumOfNews,
	getAppreciationLetters,
}

export default apis