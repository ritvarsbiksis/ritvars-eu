import Link from 'next/link'

import { PirmaSkanaIcon } from '@/components/pirma-skana-icon/pirma-skana-icon'
import { PIRMA_SKANA_TITLE } from '@/constants'

export const PirmaSkanaApp = () => (
  <Link href={'/pirma-skana'}>
    <div className="flex flex-col  w-48 items-center">
      <PirmaSkanaIcon />
      <p className="text-center text-2xl drop-shadow">{PIRMA_SKANA_TITLE}</p>
    </div>
  </Link>
)
