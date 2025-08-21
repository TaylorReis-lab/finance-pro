import * as React from 'react'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import AppTheme from '../theme/AppTheme'
import AppNavbar from '../components/AppNavbar'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { FinexaLogo } from '../components/brand/Logo'

export default function FeedbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)
    
    const formspreeUrl = 'https://formspree.io/f/mqalvjzn'

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        alert('Erro ao enviar feedback. Tente novamente.')
      }
    } catch (err) {
      console.error(err)
      alert('Erro ao enviar feedback. Tente novamente.')
    }
  }

  return (
    <AppTheme>
      <Header />
      <CssBaseline enableColorScheme />
      <SideMenu />
      <AppNavbar />
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
          p: 2,
        })}
      >
        <Paper
          variant="outlined"
          sx={{
            maxWidth: 600,
            width: '100%',
            p: 5,
            borderRadius: 3,
            backgroundColor: 'background.paper',
          }}
        >
          <Stack spacing={3} alignItems="center" sx={{ mb: 3 }}>
            <FinexaLogo width={60} height={90} />
            <Typography variant="h5" fontWeight={600} color="primary.main">
              Deixe seu Feedback
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Stack spacing={2}>
              <TextField label="Nome" value={name} onChange={e => setName(e.target.value)} fullWidth required />
              <TextField
                label="E-mail"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Mensagem"
                value={message}
                onChange={e => setMessage(e.target.value)}
                fullWidth
                multiline
                rows={6}
                required
              />

              <Button type="submit" variant="contained" color="primary">
                Enviar Feedback
              </Button>

              {success && (
                <Typography color="success.main" align="center">
                  Obrigado pelo seu feedback!
                </Typography>
              )}
            </Stack>
          </Box>
        </Paper>
      </Box>
    </AppTheme>
  )
}
