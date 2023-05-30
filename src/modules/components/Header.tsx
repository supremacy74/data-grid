import { FC } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Container } from '@mui/material'

import Box from '@mui/material/Box'

import ThemeSwitcher from '@/modules/components/ThemeSwitcher'

const Header: FC = () => {
  return (
    <Box sx={{ padding: '25px 0' }}>
      <Container>
        <ThemeSwitcher />
      </Container>
    </Box>
  )
}

export default Header
