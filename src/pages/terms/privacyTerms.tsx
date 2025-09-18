import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { FinexaLogo } from '../../components/brand/Logo'
import AppTheme from '../../theme/AppTheme'

export default function PrivacyTerms() {
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
            width: '100%',
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
            Finance Pro
          </Typography>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
            Política de Privacidade
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos suas informações ao utilizar o Finance Pro.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            1. Informações Coletadas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Coletamos informações fornecidas por você, como nome, e-mail e dados financeiros, além de informações de uso da plataforma para melhorar nossos serviços.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            2. Uso das Informações
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Utilizamos seus dados para personalizar sua experiência, fornecer suporte, aprimorar funcionalidades e garantir a segurança da plataforma.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            3. Compartilhamento de Dados
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou mediante seu consentimento.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            4. Segurança
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou destruição.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            5. Seus Direitos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Você pode acessar, corrigir ou solicitar a exclusão de suas informações pessoais a qualquer momento, entrando em contato conosco.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            6. Alterações nesta Política
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças relevantes por meio da plataforma.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            7. Contato
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Em caso de dúvidas sobre privacidade, entre em contato pelo e-mail suporte@financepro.com.
          </Typography>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 4 }}>
            Última atualização: Setembro de 2025
          </Typography>
        </Paper>
      </Box>
    </AppTheme>
  )
}