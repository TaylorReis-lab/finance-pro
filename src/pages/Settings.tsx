import React, { useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  Paper,
  Select,
  MenuItem,
  Stack,
  Snackbar,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import AppTheme from '../theme/AppTheme'
import AppNavbar from '../components/AppNavbar'
import SideMenu from '../components/SideMenu'
import { useTheme } from '@mui/material/styles'

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
  { value: 'pt-BR', labelKey: 'languagePT' },
  { value: 'en-US', labelKey: 'languageEN' },
]

const themeModes = [
  { value: 'system', labelKey: 'themeSystem' },
  { value: 'light', labelKey: 'themeLight' },
  { value: 'dark', labelKey: 'themeDark' },
]

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation()
  const theme = useTheme()
  const [dateFormat, setDateFormat] = useState(dateFormats[0].value)
  const [currency, setCurrency] = useState(currencies[0].value)
  const [language, setLanguage] = useState(languages[0].value)
  const [themeMode, setThemeMode] = useState('system')
  const [saved, setSaved] = useState(false)

  // Simula persistência automática e feedback visual
  const autoSave = (setter: React.Dispatch<any>, value: any, persistFn?: (v: any) => void) => {
    setter(value)
    if (persistFn) persistFn(value)
    setSaved(true)
    setTimeout(() => setSaved(false), 1200)
  }

  return (
    <AppTheme>
      <SideMenu />
      <AppNavbar />
      <Box
        sx={{
          margin: '40px auto',
          maxWidth: 600,
          px: 2,
          width: '100%',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3, fontWeight: 700 }}>
          {t('settingsTitle')}
        </Typography>

        <Stack spacing={3} sx={{ width: '100%' }}>
          {/* Tema */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: 'background.paper',
              boxShadow: theme.palette.mode === 'dark' ? 4 : 2,
            }}
          >
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" sx={{ fontWeight: 500, mb: 1 }}>
                {t('systemTheme')}
              </FormLabel>
              <RadioGroup row value={themeMode} onChange={e => autoSave(setThemeMode, e.target.value)} sx={{ gap: 2 }}>
                {themeModes.map(mode => (
                  <FormControlLabel
                    key={mode.value}
                    value={mode.value}
                    control={<Radio color="primary" />}
                    label={t(mode.labelKey)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>

          {/* Formato de Data */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: 'background.paper',
              boxShadow: theme.palette.mode === 'dark' ? 4 : 2,
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('dateFormat')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Select
              value={dateFormat}
              onChange={e => autoSave(setDateFormat, e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ minWidth: 180 }}
            >
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
              boxShadow: theme.palette.mode === 'dark' ? 4 : 2,
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('currency')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Select
              value={currency}
              onChange={e => autoSave(setCurrency, e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ minWidth: 180 }}
            >
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
              boxShadow: theme.palette.mode === 'dark' ? 4 : 2,
            }}
          >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
              {t('language')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Select
              value={language}
              onChange={e => {
                autoSave(setLanguage, e.target.value)
                i18n.changeLanguage(e.target.value)
              }}
              fullWidth
              variant="outlined"
              sx={{ minWidth: 180 }}
            >
              {languages.map(l => (
                <MenuItem key={l.value} value={l.value}>
                  {t(l.labelKey)}
                </MenuItem>
              ))}
            </Select>
          </Paper>
        </Stack>

        {/* Snackbar de sucesso */}
        <Snackbar
          open={saved}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          message={t('settingsSaved')}
          autoHideDuration={1200}
        />
      </Box>
    </AppTheme>
  )
}

export default Settings
