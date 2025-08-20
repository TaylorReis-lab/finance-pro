import React, { useState } from 'react'
import { Box, Typography, Divider, Paper, Select, MenuItem, Stack } from '@mui/material'
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

      <Box sx={{ margin: '40px auto', maxWidth: 1000, px: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', mb: 3, fontWeight: 600 }}>
          {t('settings')}
        </Typography>

        <Stack spacing={3}>
          {/* Tema */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: 'background.paper',
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('systemTheme')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ColorModeSelect fullWidth />
          </Paper>

          {/* Formato de Data */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: 'background.paper',
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('dateFormat')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Select value={dateFormat} onChange={e => setDateFormat(e.target.value)} fullWidth variant="outlined">
              {dateFormats.map(df => (
                <MenuItem key={df.value} value={df.value}>
                  {t(df.labelKey)}
                </MenuItem>
              ))}
            </Select>
          </Paper>

          {/* Moeda */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: 'background.paper',
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('currency')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Select value={currency} onChange={e => setCurrency(e.target.value)} fullWidth variant="outlined">
              {currencies.map(c => (
                <MenuItem key={c.value} value={c.value}>
                  {t(c.labelKey)}
                </MenuItem>
              ))}
            </Select>
          </Paper>

          {/* Idioma */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: 'background.paper',
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('language')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Select value={language} onChange={e => handleLanguageChange(e.target.value)} fullWidth variant="outlined">
              {languages.map(l => (
                <MenuItem key={l.value} value={l.value}>
                  {t(l.labelKey)}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Stack>
      </Box>
    </AppTheme>
  )
}

export default Settings
