import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
})

export const getProjects = () => api.get('/projects/')
export const getProject = (id) => api.get(`/projects/${id}/`)
export const getAcademics = () => api.get('/academics/')
export const getSkills = () => api.get('/skills/')
export const getAbout = () => api.get('/about/')
export const sendContact = (data) => api.post('/contact/', data)
