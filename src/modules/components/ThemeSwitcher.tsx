import { FC, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import Box from '@mui/material/Box'

import { RootState } from '@/store'

import { toggleTheme } from '@/store/slices/themeSlice'

const ThemeSwitcher: FC = () => {
  const dispatch = useDispatch()

  const isDarkMode = useSelector((store: RootState) => store.theme.isDarkMode)

  useEffect(() => {
    const status = localStorage.getItem('isDarkMode')

    if (status && JSON.parse(status)) {
      dispatch(toggleTheme())
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <Box
      sx={{
        cursor: 'pointer',
        width: 'fit-content',
        '&:hover': { filter: 'brightness(75%)' }
      }}
      onClick={() => dispatch(toggleTheme())}
    >
      {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </Box>
  )
}

export default ThemeSwitcher
