import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Divider,
  Paper,
  Grid,
  Stack,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import ColorModeSelect from '../theme/ColorModeSelect'
import AppTheme from '../theme/AppTheme'
import AppNavbar from '../components/AppNavbar'
import SideMenu from '../components/SideMenu'

const dateFormats = [
  { value: 'dd/MM/yyyy', labelKey: 'dateFormatDDMMYYYY' },
  { value: 'MM/dd/yyyy', labelKey: 'dateFormatMMDDYYYY' },
  { value: 'yyyy-MM-dd', labelKey: 'dateFormatYYYYMMDD' },
]

const currencies = [
  { value: 'BRL', labelKey: 'currencyBRL' },
  { value: 'USD', labelKey: 'currencyUSD' },
  { value: 'EUR', labelKey: 'currencyEUR' },
]

const languages = [
  { value: 'pt-BR', labelKey: 'Portugues' },
  { value: 'en-US', labelKey: 'English' },
]

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [dateFormat, setDateFormat] = useState(dateFormats[0].value)
  const [currency, setCurrency] = useState(currencies[0].value)
  const [language, setLanguage] = useState(languages[0].value)

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    i18n.changeLanguage(value)
  }

  return (
    <AppTheme>
      <SideMenu />
      <AppNavbar />
      <Box sx={{ margin: '40px auto', maxWidth: 900, px: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
          {t('settings')}
        </Typography>

        <Grid container spacing={3}>
          {/* Tema */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                {t('systemTheme')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <ColorModeSelect fullWidth />
            </Paper>
          </Grid>

          {/* Formato de data */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                {t('dateFormat')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Select value={dateFormat} onChange={e => setDateFormat(e.target.value)} fullWidth>
                {dateFormats.map(df => (
                  <MenuItem key={df.value} value={df.value}>
                    {t(df.labelKey)}
                  </MenuItem>
                ))}
              </Select>
            </Paper>
          </Grid>

          {/* Moeda */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                {t('currency')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Select value={currency} onChange={e => setCurrency(e.target.value)} fullWidth>
                {currencies.map(c => (
                  <MenuItem key={c.value} value={c.value}>
                    {t(c.labelKey)}
                  </MenuItem>
                ))}
              </Select>
            </Paper>
          </Grid>

          {/* Idioma */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" gutterBottom>
                {t('language')}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Select
                value={language}
                onChange={e => handleLanguageChange(e.target.value)}
                fullWidth
              >
                {languages.map(l => (
                  <MenuItem key={l.value} value={l.value}>
                    {t(l.labelKey)}
                  </MenuItem>
                ))}
              </Select>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </AppTheme>
  )
}

export default Settings
