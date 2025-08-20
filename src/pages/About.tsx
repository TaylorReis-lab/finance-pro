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
import NavbarBreadcrumbs from '../components/NavbarBreadcrumbs'

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
        })}
      >
        <Paper
          variant="outlined"
          sx={{
            maxWidth: 700,
            width: '100%',
            p: 5,
            borderRadius: 3,
            backgroundColor: 'background.paper',
            textAlign: 'center',
          }}
        >
          <Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <FinexaLogo width={60} height={90} />
            <Typography variant="h5" fontWeight={600} color="primary.main">
              Sobre a aplicação
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7, color: 'text.secondary' }}>
            O <strong>Finexa</strong> é uma solução completa para gestão financeira pessoal. Permite controlar receitas,
            despesas, visualizar gráficos, planejar o orçamento e acompanhar o progresso financeiro de forma simples e
            intuitiva. Foi desenvolvido para ajudar você a conquistar seus objetivos e ter mais tranquilidade no dia a
            dia.
          </Typography>

          <Stack spacing={4}>
            {/* Desenvolvedor */}
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Desenvolvedor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>{developer.name}</strong>
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
                <Button
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="outlined"
                >
                  GitHub
                </Button>
                <Button
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="outlined"
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>

            {/* Links úteis */}
            <Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Links úteis
              </Typography>
              <Stack spacing={2} alignItems="center">
                {projectLinks.map(link => (
                  <Button
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    variant="outlined"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 500,
                      justifyContent: 'center',
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </AppTheme>
  )
}
