import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { BarChart } from '@mui/x-charts/BarChart'
import { useTheme } from '@mui/material/styles'

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function PageViewsBarChart() {
  const theme = useTheme()
  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ]
  // Valores fictícios de dinheiro
  const total = 140000
  const variation = +0.3 // -10%
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Receita e conversões
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {formatCurrency(total)}
            </Typography>
            <Chip
              size="small"
              color={variation < 0 ? 'error' : 'success'}
              label={`${variation > 0 ? '+' : ''}${(variation * 100).toFixed(0)}%`}
            />
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Receita e conversões dos últimos 4 meses
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'band',
              categoryGapRatio: 0.5,
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              height: 24,
            },
          ]}
          yAxis={[{ width: 70, valueFormatter: formatCurrency }]}
          series={[
            {
              id: 'receita',
              label: 'Receita',
              data: [22340, 38720, 29980, 41250, 33570, 27890, 29980],
              stack: 'A',
            },
            {
              id: 'despesas',
              label: 'Despesas',
              data: [10980, 22150, 18384, 21010, 17520, 15930, 18384],
              stack: 'A',
            },
            {
              id: 'lucro',
              label: 'Lucro',
              data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
              stack: 'A',
            },
          ]}
          height={250}
          margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
          grid={{ horizontal: true }}
          hideLegend
        />
      </CardContent>
    </Card>
  )
}