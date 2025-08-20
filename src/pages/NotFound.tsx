import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import AppTheme from '../theme/AppTheme'
import AppNavbar from '../components/AppNavbar'
import { useNavigate } from 'react-router-dom'
import { FinexaLogo } from '../components/brand/Logo'

function FallingLettersBackground() {
  const letters = ['F', 'I', 'N', 'E', 'X', 'A', '4', '0', '4']
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg width="100%" height="100%" style={{ position: 'absolute', left: 0, top: 0 }}>
        {Array.from({ length: 20 }).map((_, i) => {
          const x = Math.random() * 90 + 5
          const delay = Math.random() * 3
          const letter = letters[Math.floor(Math.random() * letters.length)]
          return (
            <text
              key={i}
              x={`${x}%`}
              y="0"
              fontSize={34}
              fill="#155EEF"
              opacity="0.12"
              fontWeight="bold"
            >
              <animate
                attributeName="y"
                values="0;100%;0"
                dur="4s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              {letter}
            </text>
          )
        })}
      </svg>
    </Box>
  )
}

function FriendlyRobotMascot() {
  return (
    <Box sx={{ mb: 3 }}>
      <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="120" cy="180" rx="40" ry="10" fill="#b0bec5" opacity="0.3" />
        <path
          d="M70 90 Q120 30 170 90 Q160 50 120 50 Q80 50 70 90 Z"
          fill="url(#capuzGradient)"
        />
        <defs>
          <linearGradient id="capuzGradient" x1="70" y1="50" x2="170" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#263238" />
            <stop offset="1" stopColor="#155EEF" />
          </linearGradient>
          <linearGradient id="faceGradient" x1="90" y1="80" x2="150" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#90caf9" />
            <stop offset="1" stopColor="#312ECB" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="100" rx="32" ry="28" fill="url(#faceGradient)" stroke="#155EEF" strokeWidth="3" />
        <rect x="100" y="95" width="40" height="12" rx="6" fill="#263238" />
        <rect x="100" y="95" width="18" height="12" rx="6" fill="#1976d2" opacity="0.5" />
        <rect x="122" y="95" width="18" height="12" rx="6" fill="#1976d2" opacity="0.5" />
        <rect x="105" y="98" width="8" height="3" rx="1.5" fill="#bbdefb">
          <animate attributeName="x" values="105;110;105" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="127" y="98" width="8" height="3" rx="1.5" fill="#bbdefb">
          <animate attributeName="x" values="127;132;127" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="115" y="115" width="10" height="3" rx="1.5" fill="#42A5F5" />
        <rect x="90" y="128" width="60" height="38" rx="19" fill="#263238" />
        <rect x="105" y="155" width="30" height="12" rx="3" fill="#155EEF" />
        <rect x="110" y="159" width="20" height="5" rx="2" fill="#fff" />
        <ellipse cx="110" cy="165" rx="7" ry="3" fill="#312ECB">
          <animate attributeName="cx" values="110;115;110" dur="0.7s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="130" cy="165" rx="7" ry="3" fill="#312ECB">
          <animate attributeName="cx" values="130;125;130" dur="0.7s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </Box>
  )
}

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppNavbar />
      <Box
        sx={theme => ({
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'hidden',
          textAlign: 'center',
          p: 2,
        })}
      >
        <FallingLettersBackground />

        {/* Logo Finexa */}
        <Box sx={{ mb: 2, zIndex: 1 }}>
          <FinexaLogo width={90} height={60} />
        </Box>

        <FriendlyRobotMascot />

        <Typography variant="h2" color="primary" fontWeight={700} sx={{ mb: 1, zIndex: 1 }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, zIndex: 1 }}>
          Página não encontrada
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, zIndex: 1 }}>
          Opa! Parece que você tentou acessar um caminho inexistente.<br />
          Nosso robô está aqui para te guiar de volta.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')} sx={{ zIndex: 1 }}>
          Voltar para Home
        </Button>
      </Box>
    </AppTheme>
  )
}
