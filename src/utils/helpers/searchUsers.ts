import axios from 'axios'

const searchUsers = async (query: string) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  )

  const users = response.data.items

  return users
}

export default searchUsers
