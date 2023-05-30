import { FC, useState } from 'react'

import { useDispatch } from 'react-redux'

import { Box, Input, Button } from '@mui/material'

import searchUsers from '@/utils/helpers/searchUsers'

import { setUsers } from '@/store/slices/usersSlice'

const Search: FC = () => {
  const [value, setValue] = useState<string>('')

  const dispatch = useDispatch()

  const handleClick = () => {
    searchUsers(value)
      .then((users) => {
        dispatch(setUsers(users))

        localStorage.setItem('users', JSON.stringify(users))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <Input
        sx={{
          color: 'primary.main',
          borderBottom: '0.005rem solid',
          borderBottomColor: 'primary.main'
        }}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={() => handleClick()}>Search</Button>
    </Box>
  )
}

export default Search
