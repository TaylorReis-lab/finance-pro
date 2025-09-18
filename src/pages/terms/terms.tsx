import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { FinexaLogo } from '../../components/brand/Logo'
import AppTheme from '../../theme/AppTheme'

export default function Terms() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, #1e1e2f 0%, #155EEF 100%)'
              : 'linear-gradient(135deg, #e3f2fd 0%, #155EEF 100%)',
          py: 6,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            maxWidth: 700,
            width: '90%',
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            textAlign: 'left',
            mt: 4,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FinexaLogo width={60} height={60} style={{ marginBottom: 8 }} />
          <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
            Termos de Uso e Condições
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Bem-vindo ao Finance Pro! Ao utilizar nosso sistema, você concorda com os termos e condições abaixo. Leia atentamente.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            1. Coleta de Dados
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Coletamos apenas os dados necessários para o funcionamento da plataforma, como informações de cadastro e dados financeiros inseridos por você. Não compartilhamos seus dados com terceiros sem sua autorização.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            2. Uso das Informações
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Suas informações são utilizadas exclusivamente para fornecer e aprimorar os serviços do Finance Pro, garantindo segurança e personalização da experiência.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            3. Segurança
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adotamos práticas de segurança para proteger seus dados contra acessos não autorizados, alterações ou divulgações indevidas.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            4. Responsabilidades do Usuário
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Você é responsável por manter a confidencialidade de suas credenciais de acesso e pelas informações inseridas na plataforma.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            5. Alterações nos Termos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Os termos podem ser atualizados periodicamente. Notificaremos sobre mudanças relevantes por meio da plataforma.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            6. Contato
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Em caso de dúvidas sobre privacidade ou termos de uso, entre em contato pelo e-mail suporte@financepro.com.
          </Typography>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 4 }}>
            Última atualização: Setembro de 2025
          </Typography>
        </Paper>
      </Box>
    </AppTheme>
  )
}