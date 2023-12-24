import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

export function Dashboard() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Helmet title="Dashboard" />
      <Button>Click me</Button>
    </div>
  )
}
