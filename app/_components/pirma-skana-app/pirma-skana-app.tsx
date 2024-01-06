import Link from 'next/link'

import { PirmaSkanaIcon } from '@/components/pirma-skana-icon/pirma-skana-icon'

export const PirmaSkanaApp = () => (
  <Link href={'/pirma-skana'}>
    <div className="flex flex-col  w-48 items-center">
      <PirmaSkanaIcon />
      <p className="text-center text-2xl drop-shadow">Pirmā skaņa</p>
    </div>
  </Link>
)
