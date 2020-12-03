export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const addPost = (newPost) => {
  return {
    type: 'ADD_POST',
    newPost
  }
}

export const filterPosts = (search) => {
  return {
    type: 'SEARCH_POSTS',
    search
  }
}

export const setLogin = () => {
  return {
    type: 'SET_LOGIN'
  }
}