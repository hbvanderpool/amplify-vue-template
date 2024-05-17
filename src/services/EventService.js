import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://upzml0i5fk.execute-api.us-east-2.amazonaws.com/dev',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/FetchEvents')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
