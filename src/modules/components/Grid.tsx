import { FC, useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  DataGrid,
  GridRowParams,
  GridColDef,
  GridSortModel,
  GridFilterModel,
  GridFilterItem
} from '@mui/x-data-grid'

import Box from '@mui/material/Box'

import RowInterface from '@/interfaces/RowInterface'

import searchUsers from '@/utils/helpers/searchUsers'

import { RootState } from '@/store'

import { setUsers } from '@/store/slices/usersSlice'

import RowModal from '@/modules/components/RowModal'
import Search from '@/modules/components/Search'

const Grid: FC = () => {
  const dispatch = useDispatch()

  const [selectedRow, setSelectedRow] = useState<RowInterface | null>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const [filterModel, setFilterModel] = useState<any>({ items: [] })
  const [sortModel, setSortModel] = useState<any>([])

  const users = useSelector((state: RootState) => state.users.data)

  useEffect(() => {
    const data = localStorage.getItem('users')

    if (data) {
      dispatch(setUsers(JSON.parse(data)))
    } else {
      searchUsers('john')
        .then((users) => {
          dispatch(setUsers(users))
        })
        .catch((error) => {
          console.error(error)
        })
    }

    const filterModel = localStorage.getItem('filterModel')
    const sortModel = localStorage.getItem('sortModel')

    if (filterModel) {
      setFilterModel(JSON.parse(filterModel))
    }

    if (sortModel) {
      setSortModel(JSON.parse(sortModel))
    }
  }, [])

  const handleFilterChange = (model: GridFilterModel) => {
    setFilterModel(model)
  }

  const handleSortChange = (model: GridSortModel) => {
    setSortModel(model)
  }

  useEffect(() => {
    localStorage.setItem('filterModel', JSON.stringify(filterModel))
    localStorage.setItem('sortModel', JSON.stringify(sortModel))
  }, [filterModel, sortModel])

  const columns: GridColDef[] = [
    {
      field: 'avatar_url',
      headerName: 'Avatar',
      width: 285,
      renderCell: (params) => (
        <img
          src={params.value as string}
          alt="Avatar"
          style={{ width: '100%', minHeight: '200px' }}
        />
      )
    },
    {
      field: 'login',
      headerName: 'Login',
      width: 285,
      cellClassName: 'login-cell'
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 285,
      cellClassName: 'type-cell'
    },
    { field: 'url', headerName: 'URL', width: 290, cellClassName: 'url-cell' }
  ]

  const handleRowClick = (params: GridRowParams) => {
    setSelectedRow(params.row as RowInterface)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      <Search />
      {filterModel?.items?.length > 0 || sortModel?.length > 0 ? (
        <DataGrid
          rows={users}
          columns={columns}
          filterModel={filterModel}
          sortModel={sortModel}
          onFilterModelChange={handleFilterChange}
          onSortModelChange={handleSortChange}
          autoHeight
          sx={{
            color: 'primary.main',
            '& *': { color: 'primary.main' },
            '& .MuiDataGrid-row': { cursor: 'pointer' }
          }}
          onRowClick={handleRowClick}
        />
      ) : (
        <DataGrid
          rows={users}
          columns={columns}
          autoHeight
          sx={{
            color: 'primary.main',
            '& *': { color: 'primary.main' },
            '& .MuiDataGrid-row': { cursor: 'pointer' }
          }}
          onFilterModelChange={handleFilterChange}
          onSortModelChange={handleSortChange}
          onRowClick={handleRowClick}
        />
      )}
      {selectedRow && (
        <RowModal
          row={selectedRow}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  )
}

export default Grid
