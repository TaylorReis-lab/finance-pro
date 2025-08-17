import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = () => {
  const { user } = useAuth()

  // Verifica se o usuário está autenticado
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Verifica se o usuário tem alguma permissão além de 'access_home'
  const hasExtraPermission = user.permissions?.some(perm => perm !== 'access_home')

  // Se não tiver nenhuma permissão extra, redireciona para uma página específica
  if (!hasExtraPermission) {
    return <Navigate to="/no-extra-permission" replace />
  }

  // Verifica permissão específica para acessar a Home
  if (!user.permissions?.includes('access_home')) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

export default PrivateRoute
