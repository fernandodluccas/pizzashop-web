import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

export function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Helmet title="Autenticação" />
      <Button>Click me</Button>
    </div>
  )
}
