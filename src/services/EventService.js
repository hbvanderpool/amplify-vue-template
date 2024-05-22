import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://2v2w8rviu8.execute-api.us-east-2.amazonaws.com/dev',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
