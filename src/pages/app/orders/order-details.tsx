import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido #{orderId}</DialogTitle>
        <DialogDescription>Detalhes do pedido </DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                <span className="text-muted-foreground">Pendente</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              Fernando D&apos;luccas
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">(11) 99999-9999</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex justify-end">
              dluccash@hotmail.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado há
            </TableCell>
            <TableCell className="flex justify-end">15 minutos</TableCell>
          </TableRow>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza de Calabresa</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 32,00</TableCell>
              <TableCell className="text-right">R$ 64,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de Frango</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 37,00</TableCell>
              <TableCell className="text-right">R$ 74,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-medium">
                R$ 138,00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
