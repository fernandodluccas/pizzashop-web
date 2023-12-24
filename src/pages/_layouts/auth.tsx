import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <h1>Autenticação</h1>
      <Outlet />
      <Footer />
    </div>
  )
}
