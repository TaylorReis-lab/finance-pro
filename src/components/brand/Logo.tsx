import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { memo } from 'react'

export const FinexaLogo = memo(() => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  // Sistema de cores aprimorado
  const colors = {
    primary: isDarkMode ? '#42A5F5' : '#155EEF', // Azul mais claro no dark mode
    secondary: isDarkMode ? '#5C6BC0' : '#312ECB', // Roxo-azulado mais claro no dark mode
    textPrimary: isDarkMode ? '#bbdefb' : '#0d47a1',
    textSecondary: isDarkMode ? '#e3f2fd' : '#1e88e5',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        padding: 1,
        borderRadius: 0.4,
        '&:hover': {
          transform: 'scale(1)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* SVG Dinâmico */}
      <Box
        component="svg"
        width="15%"
        height="45px"
        marginLeft="15px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.3)',
            opacity: 0.9,
          },
        }}
        aria-label="Finexa Logo"
      >
        {/* Triângulo superior */}
        <path d="M10.1687 6H24L13.8313 19H0L10.1687 6Z" fill={colors.primary} />

        {/* Forma inferior */}
        <path d="M10.9935 19.9648L7 25H21.6894L32 12H21.1583L14.8412 19.9648H10.9935Z" fill={colors.secondary} />
      </Box>

      {/* Texto com gradiente dinâmico */}
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: 800,
          letterSpacing: 1.2,
          background: `linear-gradient(135deg, ${colors.textPrimary} 0%, ${colors.textSecondary} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.6, 1)',
          '&:hover': {
            letterSpacing: 2,
          },
        }}
      >
        FINEXA
      </Typography>
    </Box>
  )
})
