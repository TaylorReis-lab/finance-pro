import * as React from 'react'
import { alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import AppNavbar from '../components/AppNavbar'
import Header from '../components/Header'
import NavbarBreadcrumbs from '../components/NavbarBreadcrumbs'
import SideMenu from '../components/SideMenu'
import AppTheme from '../theme/AppTheme'
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../theme/customizations'

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
}

// Mock de clientes
const clientes = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '(11) 99999-9999' },
  { id: 2, nome: 'Maria Souza', email: 'maria@email.com', telefone: '(21) 98888-8888' },
  { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', telefone: '(31) 97777-7777' },
]

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'telefone', headerName: 'Telefone', width: 150 },
]

export default function Clients(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={theme => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
              width: '97%',
            }}
          >
            <Header />
            <NavbarBreadcrumbs items={[{ label: '', href: '/clients' }]} />
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={clientes}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  )
}
