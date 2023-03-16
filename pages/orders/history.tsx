import { ShopLayout } from '@/components/layouts'
import { HistoryTable } from '@/components/ui'

interface Props {}

export default function HistoryPage(props: Props) {
  return (
    <>
      <ShopLayout
        title='Historial de ordenes'
        pageDescription='Historial de ordenes del cliente'
      >
        <h4 className='text-2xl mb-4'>Historial de ordenes</h4>
        <HistoryTable />
      </ShopLayout>
    </>
  )
}
