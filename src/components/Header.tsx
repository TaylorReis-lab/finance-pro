import * as React from 'react'
import Stack from '@mui/material/Stack'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import CustomDatePicker from './CustomDatePicker'
import MenuButton from './MenuButton'
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown'
import { useLocation, Link } from 'react-router-dom'
import NavbarBreadcrumbs from './NavbarBreadcrumbs'

import Search from './Search'

const routeNameMap: Record<string, string> = {
  '/': 'Home',
  '/about': 'Sobre',
  '/settings': 'Configurações',
  '/clients': 'Clients',
}

export default function Header() {
  const location = useLocation()
  const path = location.pathname

  const items = [
    { label: 'Dashboard', href: '/' },
    { label: routeNameMap[path], active: true },
  ]
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs items={items} />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  )
}
