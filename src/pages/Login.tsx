import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import AppTheme from '../theme/AppTheme'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FinexaLogo } from '../components/brand/Logo'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Adicione lógica de autenticação aqui
  }

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box
        sx={theme => ({
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <FinexaLogo width={50} height={100} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'background.paper',
            minWidth: 320,
            zIndex: 1,
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h5" align="center">
              Login
            </Typography>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              fullWidth
              InputProps={{
                sx: { height: 48, alignItems: 'center' },
              }}
            />
            <TextField
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              fullWidth
              InputProps={{
                sx: { height: 48, alignItems: 'center' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" fullWidth>
              Entrar
            </Button>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  )
}
