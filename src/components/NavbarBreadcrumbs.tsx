import * as React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'


type BreadcrumbItem = {
  label: string
  href?: string
  active?: boolean
}

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}))

export default function NavbarBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextRoundedIcon fontSize="small" />}>
      {items.map((item, index) =>
        item.active ? (
          <Typography key={index} variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
            {item.label}
          </Typography>
        ) : (
          <Typography
            key={index}
            variant="body1"
            component="a"
            href={item.href || '#'}
            sx={{ textDecoration: 'none', color: 'text.secondary' }}
          >
            {item.label}
          </Typography>
        )
      )}
    </StyledBreadcrumbs>
  )
}
