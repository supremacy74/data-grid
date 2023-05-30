import { FC, ReactNode } from 'react'

import { ThemeProvider, createTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { useSelector } from 'react-redux'

import { RootState } from '@/store'

import Header from '@/modules/components/Header'

interface WrapperInterface {
  children: ReactNode
}

const Wrapper: FC<WrapperInterface> = ({ children }) => {
  const isDarkMode = useSelector((store: RootState) => store.theme.isDarkMode)

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#f5f5f5'
      },
      secondary: {
        main: '#050505'
      },
      background: {
        default: '#050505'
      }
    }
  })

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#050505'
      },
      secondary: {
        main: '#f5f5f5'
      },
      background: {
        default: '#f5f5f5'
      }
    }
  })

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          color: 'primary.main',
          backgroundColor: 'background.default',
          minHeight: '100vh'
        }}
      >
        <Header />
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default Wrapper
