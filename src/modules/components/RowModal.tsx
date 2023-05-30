import { FC } from 'react'

import Link from 'next/link'

import { Modal } from '@mui/material'

import RowInterface from '@/interfaces/RowInterface'
import Box from '@mui/material/Box'

interface RowModalInterface {
  row: RowInterface
  open: boolean
  onClose: () => void
}

const RowModal: FC<RowModalInterface> = ({ row, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} disableScrollLock>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'secondary.main',
          margin: '2.5rem auto',
          width: 'fit-content',
          padding: '25px',
          borderRadius: '25px'
        }}
      >
        <img
          style={{
            borderRadius: '25px',
            marginBottom: '20px',
            width: '100%',
            objectFit: 'cover'
          }}
          src={row.avatar_url}
          alt="Avatar"
        />
        <h2>{row.login}</h2>
        <p>Type: {row.type}</p>
        <Link href={row.url}>URL: {row.url}</Link>
      </Box>
    </Modal>
  )
}

export default RowModal
