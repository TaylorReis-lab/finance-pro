import React, { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import AppTheme from "../theme/AppTheme"
import AppNavbar from "../components/AppNavbar"
import SideMenu from "../components/SideMenu"
import PageViewsBarChart from "../components/PageViewsBarChart"
import SessionsChart from "../components/SessionsChart"
import ChartUserByCountry from "../components/ChartUserByCountry"

const Analytics: React.FC = () => {
  const theme = useTheme()
  const [filter, setFilter] = useState<"entrada" | "saida">("entrada")

  // Exemplo de dados fictícios
  const totalEntradas = 12500
  const totalSaidas = 7200
  const totalInvestimentos = 2800
  const saldoAtual = 5300

  return (
    <AppTheme>
      <SideMenu />
      <AppNavbar />
      <Box
        sx={{
          margin: "40px auto",
          maxWidth: 1200,
          px: 2,
          width: "100%",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "primary.main", mb: 3, fontWeight: 700 }}
        >
          Análises
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ width: "100%", mb: 3 }}
        >
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "background.paper",
              flex: 1,
              minWidth: 220,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Entradas
            </Typography>
            <Typography variant="h5" color="success.main" fontWeight={700}>
              R$ {totalEntradas.toLocaleString("pt-BR")}
            </Typography>
          </Paper>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "background.paper",
              flex: 1,
              minWidth: 220,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Saídas
            </Typography>
            <Typography variant="h5" color="error.main" fontWeight={700}>
              R$ {totalSaidas.toLocaleString("pt-BR")}
            </Typography>
          </Paper>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "background.paper",
              flex: 1,
              minWidth: 220,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Investimentos
            </Typography>
            <Typography variant="h5" color="primary.main" fontWeight={700}>
              R$ {totalInvestimentos.toLocaleString("pt-BR")}
            </Typography>
          </Paper>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "background.paper",
              flex: 1,
              minWidth: 220,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Saldo Atual
            </Typography>
            <Typography variant="h5" color="info.main" fontWeight={700}>
              R$ {saldoAtual.toLocaleString("pt-BR")}
            </Typography>
          </Paper>
        </Stack>

        <Divider sx={{ my: 3, width: "100%" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ width: "100%", mb: 3 }}
        >
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "background.paper",
              flex: 2,
              minWidth: 320,
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Sessões
            </Typography>
            <SessionsChart />
          </Paper>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "background.paper",
              flex: 2,
              minWidth: 320,
              minHeight: 320,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Visualizações de Página
            </Typography>
            <PageViewsBarChart />
          </Paper>
        </Stack>

        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: "background.paper",
            width: "100%",
            minHeight: 320,
            mt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Usuários por País
          </Typography>
          <ChartUserByCountry />
        </Paper>
      </Box>
    </AppTheme>
  )
}

export default Analytics