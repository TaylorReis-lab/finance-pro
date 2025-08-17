import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import AppTheme from '../theme/AppTheme'
import AppNavbar from '../components/AppNavbar'
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { FinexaLogo } from '../components/brand/Logo'

const developer = {
  name: 'Taylor Reis',
  github: 'https://github.com/TaylorReis-lab',
  linkedin: 'https://www.linkedin.com/in/taylorreis-dev/',
}

const projectLinks = [
  { name: 'Repositório no GitHub', url: 'https://github.com/TaylorReis-lab/finance-pro' },
  { name: 'Documentação (README)', url: 'https://github.com/TaylorReis-lab/finance-pro/blob/main/README.md' },
]

export default function About() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Header />
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
        })}
      >
        <Paper
          elevation={6}
          sx={{
            maxWidth: 650,
            width: '100%',
            p: 5,
            borderRadius: 4,
            textAlign: 'center',
            background: 'linear-gradient(160deg, #1e1e2f, #2a2a40)',
            color: '#fff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          }}
        >
          <Stack spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <FinexaLogo width={60} height={90} />
            <Typography variant="h5" fontWeight="bold">
              Sobre a aplicação
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
            O Finance é uma solução completa para gestão financeira pessoal. Com ele, você pode controlar receitas,
            despesas, visualizar gráficos, planejar seu orçamento e acompanhar seu progresso financeiro de forma simples
            e intuitiva. Desenvolvido para ajudar você a conquistar seus objetivos e ter mais tranquilidade no seu dia a
            dia.
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Desenvolvedor
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <strong>{developer.name}</strong>
            <br />
            <a href={developer.github} target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9' }}>
              GitHub
            </a>{' '}
            |{' '}
            <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#90caf9' }}>
              LinkedIn
            </a>
          </Typography>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Links úteis
          </Typography>
          <Stack spacing={2} alignItems="center">
            {projectLinks.map(link => (
              <Button
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  borderColor: '#90caf9',
                  color: '#90caf9',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(144,202,249,0.1)',
                    borderColor: '#42a5f5',
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    </AppTheme>
  )
}
