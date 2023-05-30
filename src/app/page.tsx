'use client'

import { NextPage } from 'next'

import styles from './page.module.css'

import { Container } from '@mui/material'

import Wrapper from '@/modules/layouts/Wrapper'

import Grid from '@/modules/components/Grid'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Container>
        <Grid />
      </Container>
    </Wrapper>
  )
}

export default Home
