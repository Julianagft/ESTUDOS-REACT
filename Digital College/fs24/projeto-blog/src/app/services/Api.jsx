
import axios from 'axios';

const apiJSH = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  })

  async function getUsers() {
    const response = await apiJSH.get("/users")

    return response
  }

  async function getPosts(userId) {
    const response = await apiJSH.get(`/users/${userId}/posts`)

    return response
  }

  async function getComments(postId) {
    const response = await apiJSH.get(`/posts/${postId}/comments`)

    return response
  }

  async function getAlbums(userId) {
    const response = await apiJSH.get(`/users/${userId}/albums`)

    return response
  }

  async function getPhotos(albumId) {
    const response = await apiJSH.get(`/albums/${albumId}/photos`)

    return response
  }

const API = {
    getUsers,
    getPosts,
    getComments,
    getAlbums,
    getPhotos    
 }

 export default API;